import React from 'react';
import { Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const photos = [
  { src: '/images/vict-baby.png' },
  { src: '/images/ned.jpeg' },
  { src: '/images/devilgirl.jpg' },
  { src: '/images/trump.jpg' },
  { src: '/images/one-does-not.jpg' },
  { src: '/images/dank.png' },
  { src: '/images/boy.png' },
  { src: '/images/sad.png' },
  { src: '/images/wolf.png' },
  { src: '/images/fry.jpg' },
  { src: '/images/jobs.jpg' },
  { src: '/images/phone.jpg' },
  { src: '/images/oldie.png' },
  { src: '/images/image.png' },
  { src: '/images/doubt.png' },
  { src: '/images/crying.png' },
  { src: '/images/sponge.png' },
  { src: '/images/dog.png' },
  { src: '/images/frust.png' },
  { src: '/images/web.png' },
  { src: '/images/penguin.png' }
];

class MemeMaker extends React.Component {
	constructor() {
		super();
		this.state = {
			currentImage: 0,
			modalIsOpen: false,
			currentImageBase64: null,
			topText: '',
			bottomText: '',
			isTopDragging: false,
			isBottomDragging: false,
			topY: "10%",
			topX: "50%",
			bottomY: "90%",
			bottomX: "50%"
		};
		this.fontStyle = {
			fontFamily: "Impact",
			fontSize: "50px",
			textTransform: "uppercase",
			fill: "#FFF",
			stroke: "#000",
			userSelect: "none"
		}
	}
	
	toggle = () => {
		this.setState((prevState) => ({
			modalIsOpen: !prevState.modalIsOpen,
			topText: '',
			bottomText: ''
		}));
	}

	updateTopTextValue = (event) => {
		const text = document.getElementById("toptext").value;
		this.setState({
			topText: text
		});
	}

	updateBottomTextValue = (event) => {
		const text = document.getElementById("bottomtext").value;
		this.setState({
			bottomText: text
		});
	}

	openImage = (index) => {
		const image = photos[index];
		const baseImage = new Image();
		baseImage.src = image.src;
		const
		 base64 = this.getBase64Image(baseImage);
		 console.log(base64);
		this.setState((prevState) => ({
			currentImage: index,
			modalIsOpen: !prevState.modalIsOpen,
			currentImageBase64: base64,
		}));
	}

	getBase64Image = (image) => {
		const canvas = document.createElement("canvas");
		canvas.width = image.width;
		canvas.height = image.height;
		const ctx = canvas.getContext('2d');
		ctx.drawImage(image, 0, 0);
		const dataURL = canvas.toDataURL("image/png");
		return dataURL;
	}

	setHeightAndWidth = () => {
		const image = photos[this.state.currentImage];
		const baseImage = new Image();
		baseImage.src = image.src;
		const widthHeightRatio = baseImage.width/baseImage.height;
		const newWidth = 600;
		const newHeight = newWidth/widthHeightRatio;
		return [newWidth, newHeight];
	}

	downloadMeme = () => {
		const svg = document.getElementById("svg-ref");
		const canvas = document.createElement("canvas");
		const svgSize = svg.getBoundingClientRect();
		canvas.width = svgSize.width;
		canvas.height = svgSize.height;

		const img = document.createElement("img");
		const svgData = new XMLSerializer().serializeToString(svg);
		img.setAttribute("src", "data:image/svg+xml;base64," + btoa(svgData));

		img.onload = function() {
			canvas.getContext("2d").drawImage(img, 0, 0);
			const canvasdata = canvas.toDataURL("image/png");
			const a = document.createElement("a");
			a.download = "Meme.png";
			a.href = canvasdata;
			a.click();
		}
	}

	render() {
		var newDimension = this.setHeightAndWidth();
		return (
			<div className="app-container">
				<div className="sidebar-container">
					<h1>Meme maker</h1>
					<hr />
					<p> Click on any template image given in the gallery.</p>
					<p> You can add top and bottom text to the meme-template, move the text around and can also download your meme as an image.</p>
				</div>
				<div className="gallery-container">
					{photos.map((photo, index) => (
							<div className="image-container" key={index}>
								<img 
									style={{
										width:	"100%",
										height: "100%",
										cursor: "pointer"
									}}
									alt={index}
									src={photo.src} 
									onClick={() => {this.openImage(index)}}/>
							</div>
						))}
				</div>
				<Modal isOpen={this.state.modalIsOpen} toggle={this.toggle} contentClassName="modal-container">
					<ModalHeader toggle={this.toggle}>Modal Header</ModalHeader>
					<ModalBody className="modal-body-container">
						<svg id="svg-ref" className="svg-container" width={newDimension[0]} height={newDimension[1]}>
							<image href={this.state.currentImageBase64} width={newDimension[0]} height={newDimension[1]}/>
							<text x={this.state.topX} y={this.state.topY} dominantBaseline="middle" textAnchor="middle" style={this.fontStyle}>{this.state.topText}</text>
							<text x={this.state.bottomX} y={this.state.bottomY} dominantBaseline="middle" textAnchor="middle" style={this.fontStyle}>{this.state.bottomText}</text>
						</svg>
						<Form className="form-container">
							<FormGroup>
								<Label for="toptext">Top Text</Label>
								<Input type="text" name="toptext" id="toptext" placeholder="Enter top text" onChange={this.updateTopTextValue}/>
							</FormGroup>
							<FormGroup>
								<Label for="bottomtext">Bottom Text</Label>
								<Input bsSize="large" type="text" name="bottomtext" id="bottomtext" placeholder="Enter bottom text" onChange={this.updateBottomTextValue}/>
							</FormGroup>
							<Button color="primary" onClick={this.downloadMeme}>Download</Button>
						</Form>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}

export default MemeMaker;