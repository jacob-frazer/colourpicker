import React, { useContext } from 'react';
import SettingsContext from '../Contexts/SettingsContext';
import ColourContext from '../Contexts/ColourContext';

interface SettingsPageProps {  }
  
const SettingsPage: React.FC<SettingsPageProps> = () => {
  const { settings, updateSetting } = useContext(SettingsContext);
  const colContext = useContext(ColourContext);
  if (!colContext) {
    return null;
  }
  const { colours, setColours } = colContext;

  const handleToggleAdvancedMode = () => {
    updateSetting('advancedMode', !settings.advancedMode);
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const number = parseInt(event.target.value);
    updateSetting('numberOfColours', number);
  };

  const handleAlgorithmChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const algorithm = event.target.value;
    updateSetting('defaultPaletteAlgorithm', algorithm);
  };

  return (
    <div style={{ backgroundColor: colours[1], padding: '20px', fontFamily: 'monospace' }}>
      <h2>Settings Page</h2>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="advancedMode">Advanced Mode</label>
        <input
          id="advancedMode"
          type="checkbox"
          checked={settings.advancedMode}
          onChange={handleToggleAdvancedMode}
        />
        <span style={{ marginLeft: '10px', fontSize: '14px', fontWeight: 'normal' }}>Allow user to individually set all colours</span>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="numberOfColours">Number of Colours</label>
        <select
          id="numberOfColours"
          value={settings.numberOfColours}
          onChange={handleNumberChange}
          style={{ marginLeft: '10px' }}
        >
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <span style={{ fontSize: '14px', fontWeight: 'normal' }}>How many colours to set in palette</span>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="defaultPaletteAlgorithm">Default Palette Algorithm</label>
        <select
          id="defaultPaletteAlgorithm"
          value={settings.defaultPaletteAlgorithm}
          onChange={handleAlgorithmChange}
          style={{ marginLeft: '10px' }}
        >
          <option value="algorithm1">Algorithm 1</option>
          <option value="algorithm2">Algorithm 2</option>
          <option value="algorithm3">Algorithm 3</option>
        </select>
        <span style={{ fontSize: '14px', fontWeight: 'normal' }}>Explanation of the default palette algorithm</span>
      </div>
      <div style={{ marginTop: '10px', fontSize: '14px', fontWeight: 'normal' }}>
        <span>Hover setting for more info</span>
      </div>
    </div>
  );
};

export default SettingsPage;
