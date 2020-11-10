/*eslint-disable*/
import React from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';

const useStyles = makeStyles((theme) => ({
	block: {
		padding: '15px',
		textTransform: 'uppercase',
		borderRadius: '3px',
		textDecoration: 'none',
		position: 'relative',
		display: 'block',
		fontWeight: 500,
		fontSize: '12px',
	},
	left: {
		float: 'left',
		display: 'block',
	},
	right: {
		padding: '15px 0',
		margin: '0',
		fontSize: '14px',
		float: 'right',
	},
	footer: {
		bottom: '0',
		borderTop: '1px solid ' + theme.palette.grey['200'],
		padding: '15px 0',
	},
	a: {
		color: theme.palette.primary.main,
		textDecoration: 'none',
		backgroundColor: 'transparent',
	},
	list: {
		marginBottom: '0',
		padding: '0',
		marginTop: '0',
	},
	inlineBlock: {
		display: 'inline-block',
		padding: '0px',
		width: 'auto',
	},
	container: {
		paddingRight: '15px',
		paddingLeft: '15px',
		marginRight: 'auto',
		marginLeft: 'auto',
	},
}));

const Footer: React.FC = () => {
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<div className={classes.container}>
				<div className={classes.left}>
					<List className={classes.list}>
						<ListItem className={classes.inlineBlock}>
							<a href="#home" className={classes.block}>
								Home
							</a>
						</ListItem>
						<ListItem className={classes.inlineBlock}>
							<a href="#company" className={classes.block}>
								Company
							</a>
						</ListItem>
						<ListItem className={classes.inlineBlock}>
							<a href="#portfolio" className={classes.block}>
								Portfolio
							</a>
						</ListItem>
						<ListItem className={classes.inlineBlock}>
							<a href="#blog" className={classes.block}>
								Blog
							</a>
						</ListItem>
					</List>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
