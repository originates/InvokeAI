import { RootState } from 'app/store/store';
import { useAppDispatch, useAppSelector } from 'app/store/storeHooks';
import IAISwitch from 'common/components/IAISwitch';
import { setShouldUseSymmetry } from 'features/parameters/store/generationSlice';

export default function SymmetryToggle() {
  const shouldUseSymmetry = useAppSelector(
    (state: RootState) => state.generation.shouldUseSymmetry
  );

  const dispatch = useAppDispatch();

  return (
    <IAISwitch
      isChecked={shouldUseSymmetry}
      onChange={(e) => dispatch(setShouldUseSymmetry(e.target.checked))}
    />
  );
}
