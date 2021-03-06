import React from 'react';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Paginate = ({
	pages,
	page,
	isAdmin = false,
	keyword = '',
	subdirectory = '/productlist',
}) => {
	return (
		pages > 1 && (
			<Pagination>
				{[...Array(pages).keys()].map((x) => (
					<LinkContainer
						key={x + 1}
						to={
							!isAdmin
								? keyword
									? `/search/${keyword}${subdirectory}/${
											x + 1
									  }`
									: `${subdirectory}/${x + 1}`
								: `/admin${subdirectory}/${x + 1}`
						}
					>
						<Pagination.Item active={x + 1 === page}>
							{x + 1}
						</Pagination.Item>
					</LinkContainer>
				))}
			</Pagination>
		)
	);
};

export default Paginate;
