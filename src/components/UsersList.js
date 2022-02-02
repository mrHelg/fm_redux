import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActionCreators from '../actions/userCreators';

const Userslist = (props) => {
  const { users, isFetching, error } = useSelector(({ users }) => users);
  const { getUsersRequest } = bindActionCreators(
    UserActionCreators,
    useDispatch()
  );
  const loadMore = ({ limit, offset } = {}) =>
    getUsersRequest({ offset: users.length, limit });

  useEffect(() => {
    loadMore();
  }, []);

  return (
    <div>
      <h2>Users list</h2>
      {isFetching && 'Loading...'}
      {error && JSON.stringify(error)}
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.email}</li>
        ))}
      </ul>
      <button onClick={loadMore}>load more</button>)
    </div>
  );
};

export default Userslist;

// const mapStateToProps = ({ users }) => users;
// const mapDispatchToProps = (dispatch) => ({
//   getUsersReq: ({ limit, offset } = {}) =>
//     dispatch(UserActionCreator.getUsersRequest({ limit, offset })),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(Userslist);
