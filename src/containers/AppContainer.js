import { connect } from 'react-redux';
import App from '../components/App';
import { actionHandleMediaFile } from '../actions';

function mapStateToProps(state) {
  return {
    uploadedFile: state.handleMediaFile.uploaded.data,
    currentEditingStep: state.editMediaFile.changeEditingStep,
    mediaList: state.handleMediaFile.getAllMediaFile.data,
    isMediaListLoading: state.handleMediaFile.getAllMediaFile.loading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onLoadAllMediaFile: function() {
      return dispatch(actionHandleMediaFile.getAllMediaFile());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
