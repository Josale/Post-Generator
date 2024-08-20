import React, { Component } from 'react'

export default class ImageUploader extends Component<{}, {}> {
	private fileInputRef: React.RefObject<HTMLInputElement>;
	private imagePreviewRef: React.RefObject<HTMLImageElement>;

	constructor(props: {}) {
		super(props);
		this.fileInputRef = React.createRef();
		this.imagePreviewRef = React.createRef();
	}

	handleFileChange = (): void => {
		const file = this.fileInputRef.current?.files?.[0];
		const reader = new FileReader();

		if (file) {
			reader.onload = (e) => {
				if (e.target?.result) {
					const img = new Image();
					img.src = e.target.result as string;

					img.onload = () => {
						const canvas = document.createElement('canvas');
						const ctx = canvas.getContext('2d');
						if (!ctx) return;

						const size = 500;
						canvas.width = size;
						canvas.height = size;

						const scale = Math.max(size / img.width, size / img.height);
						const x = (size - img.width * scale) / 2;
						const y = (size - img.height * scale) / 2;

						ctx.clearRect(0, 0, size, size);
						ctx.drawImage(img, x, y, img.width * scale, img.height * scale);

						const resizedImage = canvas.toDataURL('image/jpeg');

						if (this.imagePreviewRef.current) {
							this.imagePreviewRef.current.src = resizedImage;
						}
					};
				}
			};
			reader.readAsDataURL(file);
		}
	}

	render(): React.ReactNode {
		return (
			<>
				<input
					type="file" accept="image/*,.png,.jpg,.gif,.web" id="fileInput" ref={this.fileInputRef} onChange={this.handleFileChange} />
				<img id="imagePreview" ref={this.imagePreviewRef} alt="imagePreview" style={{ width: '500px', height: '500px', objectFit: 'cover' }} />
			</>
		);
	}
}
