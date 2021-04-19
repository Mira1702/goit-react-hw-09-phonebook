import { connect } from 'react-redux';
import * as authSelectors from '../../Redux/auth/auth-selectors';
import * as authOperations from '../../Redux/auth/auth-operations';

const UserMenu = ({ name, onLogout }) => (
    <div>
        <span> Добро пожаловать, {name}</span>
        <button type="button" onClick={onLogout}>
            Выйти
        </button>
    </div>
);

const mapStateToProps = (state) => ({
    name: authSelectors.getUserName(state),
});

const mapDispatchToProps = {
    onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
