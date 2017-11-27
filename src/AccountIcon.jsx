const blockies = require('blockies');
const React = require('react');
const { Image } = require('semantic-ui-react');
const { ReactiveComponent } = require('oo7-react');

function createIdentityImage (address, scale = 8) {
	return blockies({
		seed: (address || '').toLowerCase(),
		size: 8,
		scale
	}).toDataURL();
}

class AccountIcon extends ReactiveComponent {
	constructor () { super(['address', 'className', 'style']); }

	render () {
		if (typeof (this.state.address) === 'string') {
			return (
				<Image
					inline
					avatar={ this.props.avatar }
					src={ createIdentityImage(this.state.address) }
					style={ Object.assign({ borderRadius: '50%' }, this.state.style) }
					className={ typeof (this.state.className) === 'string' ? this.state.className : '' }
					id={ this.props.id }
					data-address-img
				/>);
		} else {
			return (
				<span
					style={ this.props.undefStyle }
					className={ this.props.undefClassName }
				>{this.props.undefContent}</span>);
		}
	}
}

AccountIcon.defaultProps = {
	style: {},
	className: '_accountIcon',
	undefStyle: {},
	undefClassName: '_accountIcon _undefined',
	undefContent: '',
	id: null
};

module.exports = { AccountIcon };
