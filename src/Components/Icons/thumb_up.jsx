export const ThumbsUpIcon = () => {

	//SVG asset that can be programmatically manipulated/animated

	const styles = {
		main: {
		fill: '#FFFFFF',
		stroke:'#000000',
		strokeWidth:2,
		height: 28
	}
	}

	return (
		<svg  id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
			viewBox="0 0 48 48" style={styles.main} >

		<path className="st0" d="M36,42H12.7V16.4L26.6,2l1.6,1.3c0.4,0.3,0.6,0.6,0.7,0.9s0.2,0.7,0.2,1.2v0.5l-2.2,10.5H43
			c0.8,0,1.5,0.3,2.1,0.9c0.6,0.6,0.9,1.3,0.9,2.1v4.1c0,0.4,0,0.8-0.1,1.3c-0.1,0.5-0.2,0.9-0.4,1.3l-5.8,13.4
			c-0.3,0.7-0.8,1.3-1.5,1.8S36.8,42,36,42z M9.7,16.4V42H4V16.4H9.7z"/>
		</svg>
	)
}