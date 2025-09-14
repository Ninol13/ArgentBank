function Features({ image, alt, title, text }) {
	return (
		<div className="featureItem">
			<img src={image} alt={alt} className="featureItem__icon" />
			<h3 className="featureItem__title">{title}</h3>
			<p>{text}</p>
		</div>
	)
}

export { Features }