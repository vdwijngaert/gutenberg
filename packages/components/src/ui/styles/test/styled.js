/**
 * External dependencies
 */
import { render } from '@testing-library/react';

/**
 * WordPress dependencies
 */
import { forwardRef } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { css, styled } from '..';

describe( 'basic', () => {
	test( 'should create a styled component', () => {
		const Component = styled.div`
			background: blue;
		`;

		const { container } = render( <Component /> );

		expect( container.firstChild ).toHaveStyle( { background: 'blue' } );
	} );

	test( 'should style an existing component', () => {
		const Previous = forwardRef( ( { className }, ref ) => (
			<div ref={ ref } className={ className } />
		) );

		const Component = styled( Previous )`
			background: blue;
		`;

		const { container } = render( <Component /> );

		expect( container.firstChild ).toHaveStyle( { background: 'blue' } );
	} );

	test( 'should style an existing styled component', () => {
		const Previous = styled.div`
			background: red;
		`;

		const Component = styled( Previous )`
			background: blue;
		`;

		const { container } = render( <Component /> );

		expect( container.firstChild ).toHaveStyle( { background: 'blue' } );
	} );
} );

describe( 'css', () => {
	test( 'should work with css function', () => {
		const style = css`
			color: red;
		`;

		const Component = styled.div`
			background: blue;
		`;

		const { container } = render( <Component className={ style } /> );

		expect( container.firstChild ).toHaveStyle( { background: 'blue' } );
		expect( container.firstChild ).toHaveStyle( { color: 'red' } );
	} );
} );

describe( 'as', () => {
	test( 'should support as render prop', () => {
		const Component = styled.div`
			background: blue;
		`;

		const { container } = render( <Component as="span" /> );

		expect( container.firstChild.tagName.toLowerCase() ).toBe( 'span' );
	} );
} );
