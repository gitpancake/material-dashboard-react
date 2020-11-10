import React from 'react';

// nodejs library that concatenates classes
import classNames from 'classnames';

// material-ui components
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// core components
import { Card, CardBody, CardHeader } from 'components/Card';

const useStyles = makeStyles((theme) => ({
	cardTitle: {
		float: 'left',
		padding: '10px 10px 10px 0px',
		lineHeight: '24px',
	},
	displayNone: {
		display: 'none',
	},
	tabsRoot: {
		overflowX: 'visible',
		'& $tabRootButton': {
			fontSize: '0.875rem',
		},
	},
	tabRootButton: {
		padding: '10px 15px',
		borderRadius: '3px',
		lineHeight: '24px',
		border: 0,
		color: theme.palette.common.white,
		marginLeft: '4px',
		'&:last-child': {
			marginLeft: '0px',
		},
	},
	tabSelected: {
		backgroundColor: 'rgba(0, 0, 0, 0.2)',
		transition: '0.2s background-color 0.1s',
	},
	tabWrapper: {
		display: 'inline-block',
		marginTop: '1px',
		'& > svg,& > .material-icons': {
			verticalAlign: 'middle',
			margin: '-1px 5px 0 0',
		},
	},
}));

const CustomTabs: React.FC<{
	headerColor: 'warning' | 'success' | 'danger' | 'info' | 'primary';
	tabs: { tabName: string; tabContent: object; tabIcon?: any }[];
	title: string;
}> = ({ headerColor, tabs, title }) => {
	const [value, setValue] = React.useState(0);
	const handleChange = (_, value) => {
		setValue(value);
	};
	const classes = useStyles();

	const cardTitle = classNames({
		[classes.cardTitle]: true,
	});

	return (
		<Card>
			<CardHeader color={headerColor}>
				{title !== undefined ? <div className={cardTitle}>{title}</div> : null}
				<Tabs
					value={value}
					onChange={handleChange}
					classes={{
						root: classes.tabsRoot,
						indicator: classes.displayNone,
						scrollButtons: classes.displayNone,
					}}
					variant="scrollable"
					scrollButtons="auto"
				>
					{tabs.map(({ tabName, tabIcon }, key) => {
						var icon = {};
						if (tabIcon) {
							icon = {
								//@ts-ignore
								icon: <tabIcon />,
							};
						}

						return (
							<Tab
								classes={{
									root: classes.tabRootButton,
									selected: classes.tabSelected,
									wrapper: classes.tabWrapper,
								}}
								key={key}
								label={tabName}
								{...icon}
							/>
						);
					})}
				</Tabs>
			</CardHeader>
			<CardBody>
				{tabs.map(({ tabContent }, key) => {
					if (key === value) {
						return <div key={key}>{tabContent}</div>;
					}
					return null;
				})}
			</CardBody>
		</Card>
	);
};

export default CustomTabs;
