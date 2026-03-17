import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teams: [
    {
      id: 0,
      name: 'Nos',
      points: 0,
      objectives: []
    },
    {
      id: 1,
      name: 'Ellos',
      points: 0,
      objectives: []
    }
  ],
  matchConfiguration:{
    rounds: 2,
    roundPoints: 30,
    colorsPreset: 0
  }
};

const teamsSlice = createSlice({
  name: "teamsReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase("CHANGE_TEAM_NAME", (state, action) => {
        state.teams = state.teams.map((team) => {
          if (team.id === action.payload.teamId) {
            return { ...team, name: action.payload.newName };
          }
          return team;
        });
      })
      .addCase("ADD_POINTS_TO_TEAM", (state, action) => {
        state.teams = state.teams.map((team) => {
          if (team.id === action.payload.teamId) {
            return { ...team, points: team.points + action.payload.points };
          }
          return team;
        });
      })
      .addCase("REMOVE_POINTS_TO_TEAM", (state, action) => {
        state.teams = state.teams.map((team) => {
          if (team.id === action.payload.teamId) {
            return { ...team, points: team.points - action.payload.points };
          }
          return team;
        });
      })
      .addCase("RESET_POINTS", (state) => {
        state.teams = state.teams.map((team) => ({
          ...team,
          points: 0,
        }));
      })
      .addCase("ADD_OBJECTIVE_TO_TEAM", (state, action) => {
        state.teams = state.teams.map((team) => {
          if (team.id === action.payload.teamId) {
            return { ...team, objectives: [...team.objectives, action.payload.objective] };
          }
          return team;
        });
      })
      .addCase("SET_COLORS_PRESET", (state, action) => {
        state.matchConfiguration.colorsPreset = action.payload.selectedPreset;
      })
      .addCase("SET_ROUND_POINTS", (state, action) => {
        state.matchConfiguration.roundPoints = action.payload.roundPoints;
      });
  },
});

export default teamsSlice.reducer;
