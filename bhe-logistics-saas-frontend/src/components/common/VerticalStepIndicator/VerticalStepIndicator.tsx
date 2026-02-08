/** @format */
import './VerticalStepIndicator.css';

interface VerticalStepIndicatorProps {
  activeStep?: 'seller' | 'customer';
}

const VerticalStepIndicator = ({
  activeStep = 'seller',
}: VerticalStepIndicatorProps) => {
  return (
    <div className="vsi-container">
      {/* Seller */}
      <div className="vsi-row">
        <span
          className={`vsi-dot ${
            activeStep === 'seller' ? 'orange' : 'default'
          }`}
        />
      </div>

      {/* Dotted line */}
      <div className="vsi-line" />

      {/* Customer */}
      <div className="vsi-row">
        <span
          className={`vsi-square ${
            activeStep === 'customer' ? 'green' : 'default'
          }`}
        />
      </div>
    </div>
  );
};

export default VerticalStepIndicator;
