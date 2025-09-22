// src/__tests__/updateTimes.test.js

// ✅ Mock fetchAvailableTimes function
const fetchAvailableTimes = (date) => {
    // Simulate real data return
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  };
  
  // ✅ updateTimes reducer
  const updateTimes = (state, action) => {
    if (action.type === "update") {
      return fetchAvailableTimes(action.date);
    }
    return state;
  };
  
  // ✅ Jest tests
  describe('updateTimes reducer', () => {
    test('should return available times when given a valid update action with date', () => {
      const mockDate = new Date('2025-09-22'); // or use new Date()
      const action = { type: 'update', date: mockDate };
      const result = updateTimes([], action);
  
      expect(result).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
    });
  
    test('should return existing state for unknown action type', () => {
      const initialState = ['18:00'];
      const action = { type: 'random-action' };
      const result = updateTimes(initialState, action);
  
      expect(result).toEqual(initialState);
    });
  });
  