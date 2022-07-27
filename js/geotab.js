/**
* @returns {{initialize: Function, focus: Function, blur: Function}}
*/
geotab.addin.driverProfile = () => {
    'use strict';
  
    /* Scope variables */
    let api; // Ref https://github.com/Geotab/mg-api-js
    let state;
  
    /**
     * Initialize the add-in
     */
    let initialize = () => {
  
    };
  
    let onAppStart = () => {
        // loadMorpheusFleetPulseRuntime();
        // loadMorpheusFleetPulsePolyfill();
        // loadMorpheusFleetPulseMain();
   
        api.getSession((result) => {
            var groupIds = state.getGroupFilter().map(_ => _.id);
            var toSave = {
                server : window.location.hostname,
                userName : result.userName,
                sessionId : result.sessionId,
                database :result.database,
                groupIds:groupIds
            };
            localStorage.setItem("z_mgd",window.btoa(JSON.stringify(toSave)));

                      
        }); 
    };
  
    /**
    * Render
    * App Logic
    */
    let render = () => {
          onAppStart();
    }
  
    /**
     * Aborts
     */
    let abort = () => {
    };
  
    return {
        
        initialize(freshApi, freshState, callback) {
  
            api = freshApi;
            state = freshState;
  
            initialize();
            if (callback) {
                callback();
            }
        },
  
        focus(freshApi, freshState) {
            api = freshApi;
            state = freshState;
  
            render();
        },
  
        blur() {
            abort();
        }
    };
  };
  