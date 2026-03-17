// Acción para cambiar el nombre de un equipo
export const changeTeamName = (teamId, newName) => ({
  type: 'CHANGE_TEAM_NAME',
  payload: { teamId, newName }
});

// Acción para sumar puntos a un equipo
export const addPointsToTeam = (teamId, points) => ({
  type: 'ADD_POINTS_TO_TEAM',
  payload: { teamId, points }
});

export const removePointsToTeam = (teamId, points) => ({
  type: 'REMOVE_POINTS_TO_TEAM',
  payload: { teamId, points }
});

export const resetPoints = ( ) => ({
  type: 'RESET_POINTS'
});

export const setColorsPreset = ( selectedPreset ) => ({
  type: 'SET_COLORS_PRESET',
  payload: { selectedPreset }
});


