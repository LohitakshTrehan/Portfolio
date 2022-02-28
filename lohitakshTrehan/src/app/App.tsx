// Libs
import React from 'react';

// Components
import { StatefulInput } from 'baseui/input';
import { Block } from 'baseui/block';

// Hooks
import { useStyletron } from 'baseui';

// Utils
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled, DarkTheme } from 'baseui';

const engine = new Styletron();

const Centered = styled('div', {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100%',
});

const Ss = () => {
	const [css, theme] = useStyletron();
	return (
		// <Block
		// 	overrides={{
		// 		Block: {
		// 			props: {
		// 				className: css({ color: 'red' }),
		// 			},
		// 		},
		// 	}}
		// 	// className={css({ color: 'red' })}
		// >
		// 	Red Button
		// </Block>
		<Block className="">text</Block>
	);
};

export const App = (): JSX.Element => {
	const [css, theme] = useStyletron();
	return (
		<StyletronProvider value={engine}>
			<BaseProvider theme={DarkTheme}>
				<Centered>
					{/* <Block
						overrides={{
							Block: {
								style: ({ $theme }) => ({
									backgroundColor: $theme.colors.borderSelected,
								}),
							},
						}}
						as={'div'}
						marginTop={'4px'}
					>
						yellow
					</Block> */}
					<Ss />
				</Centered>
			</BaseProvider>
		</StyletronProvider>
	);
};
