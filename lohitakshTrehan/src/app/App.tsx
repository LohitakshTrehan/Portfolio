// Libs
import React from 'react';

// Components
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider, useStyletron } from 'baseui';

// Hooks
import { useThemeManager } from './hooks/useThemeManager';

// Utils
import { Client as StyletronClientEngine } from 'styletron-engine-atomic';

const engine = new StyletronClientEngine();

// eslint-disable-next-line react/prop-types
// FIXME
const Example = ({ toggleTheme, appTheme }) => {
	const [css, theme] = useStyletron();
	return (
		<>
			<div
				className={css({
					backgroundColor: theme.colors.backgroundPrimary,
					color: theme.colors.backgroundInversePrimary,
				})}
			>
				Check Theme of this DIV
			</div>
			<div onClick={toggleTheme}>Click to change theme</div>
			<div>{`Current Theme is ${appTheme}`}</div>
		</>
	);
};

export const App = (): JSX.Element => {
	const { appTheme, baseUITheme, toggleTheme } = useThemeManager();
	return (
		<StyletronProvider value={engine}>
			<BaseProvider theme={baseUITheme}>
				{/* To Apply base UI Theme, dont access the theme variable directly here,
				instead create a separate component */}
				<Example appTheme={appTheme} toggleTheme={toggleTheme} />
			</BaseProvider>
		</StyletronProvider>
	);
};
