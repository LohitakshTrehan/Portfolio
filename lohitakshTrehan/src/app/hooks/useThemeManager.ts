// Liibs
import { useCallback, useEffect, useMemo, useState } from 'react';
import { LightTheme, DarkTheme, Theme } from 'baseui';

// Constants
import { LOCAL_STORAGE_KEYS } from '../constants/localStorageKeys'; //how to use absoute module paths?
import { THEMES } from '../constants/themes';
import { DOM_NODES } from '../constants/domNodes';

const storedTheme = localStorage.getItem(
	LOCAL_STORAGE_KEYS.THEME
) as THEMES | null;
const rootNode = document.getElementById(DOM_NODES.ROOT) as HTMLElement;

type ThemeManager = {
	appTheme: THEMES;
	baseUITheme: Theme;
	toggleTheme: () => void;
};

export const useThemeManager = (): ThemeManager => {
	const [appTheme, setAppTheme] = useState(storedTheme ?? THEMES.LIGHT_THEME);
	const baseUITheme = useMemo(() => {
		if (appTheme === THEMES.LIGHT_THEME) {
			return LightTheme;
		}
		return DarkTheme;
	}, [appTheme]);

	const toggleTheme = useCallback(() => {
		if (appTheme === THEMES.LIGHT_THEME) {
			setAppTheme(THEMES.DARK_THEME);
			localStorage.setItem(LOCAL_STORAGE_KEYS.THEME, THEMES.DARK_THEME);
		} else {
			setAppTheme(THEMES.LIGHT_THEME);
			localStorage.setItem(LOCAL_STORAGE_KEYS.THEME, THEMES.LIGHT_THEME);
		}
	}, [appTheme, setAppTheme]);

	useEffect(() => {
		if (appTheme === THEMES.LIGHT_THEME) {
			rootNode.classList.remove(THEMES.DARK_THEME);
		} else {
			rootNode.classList.add(THEMES.DARK_THEME);
		}
	}, [appTheme]);

	return { appTheme, baseUITheme, toggleTheme };
};
