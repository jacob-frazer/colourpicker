import React, { useContext } from 'react';
import SettingsContext from '../Contexts/SettingsContext';
import ColourContext from '../Contexts/ColourContext';

interface SettingsPageProps {  }
  
const Settings: React.FC<SettingsPageProps> = () => {
  const { settings, updateSetting } = useContext(SettingsContext);
  const colContext = useContext(ColourContext);
  if (!colContext) {
    return null;
  }
  const { colours, setColours } = colContext;

  const handleToggleAdvancedMode = () => {
    updateSetting('individualColourSelect', !settings.individualColourSelect);
    updateSetting('selectedColourIndex', 0);
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const number = parseInt(event.target.value);
    updateSetting('numberOfColours', number);
  };

  const handleAlgorithmChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const algorithm = event.target.value;
    updateSetting('defaultPaletteAlgorithm', algorithm);
  };

  const containerStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '10px',
    left: '10px',
    padding: '10px',
    backgroundColor: 'transparent',
    border: `2px solid ${colours[1]}`,
    borderRadius: '5px',
    fontFamily: 'monospace',
    fontSize: '14px',
    fontWeight: 'lighter',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    color: colours[1],
  };

  const settingItemStyle: React.CSSProperties = {
    marginBottom: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  };
  
  const labelStyle: React.CSSProperties = {
    marginRight: '10px',
    textAlign: 'left',
    flex: 1,
  };

  return (
    <div style={ containerStyle }>
      <h2>App Settings</h2>
      <div style={settingItemStyle}>
        <label htmlFor="advancedMode" style={labelStyle}>Individual Colour Select</label>
        <input
          id="advancedMode"
          type="checkbox"
          checked={settings.advancedMode}
          onChange={handleToggleAdvancedMode}
        />
      </div>
      <div style={settingItemStyle}>
        <label htmlFor="numberOfColours" style={labelStyle}>Number of Colours</label>
        <select
          id="numberOfColours"
          value={settings.numberOfColours}
          onChange={handleNumberChange}
        >
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div style={settingItemStyle}>
        <label htmlFor="defaultPaletteAlgorithm" style={labelStyle}>Palette Algorithm</label>
        <select
          id="defaultPaletteAlgorithm"
          value={settings.defaultPaletteAlgorithm}
          onChange={handleAlgorithmChange}
        >
          <option value="analagous">Analogous</option>
          <option value="splitComplimentary">Split Complimentary</option>
          <option value="complimentary">Complimentary</option>
          <option value="monochromatic">Monochromatic</option>
          <option value="triadic">Triadic</option>
        </select>
      </div>
    </div>
  );
};

export default Settings;
