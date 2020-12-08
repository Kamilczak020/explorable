import { useSnackbar, WithSnackbarProps } from 'notistack';
import React from 'react'

interface IProps {
  setUseSnackbarRef: (showSnackbar: WithSnackbarProps) => void;
}

const InnerSnackbarUtilsConfigurator: React.FC<IProps> = (props: IProps) => {
  props.setUseSnackbarRef(useSnackbar());
  return null;
}

let useSnackbarRef: WithSnackbarProps
const setUseSnackbarRef = (useSnackbarRefProp: WithSnackbarProps) => {
  useSnackbarRef = useSnackbarRefProp;
}

export const SnackbarUtilsConfigurator = () => {
  return <InnerSnackbarUtilsConfigurator setUseSnackbarRef={setUseSnackbarRef} />;
}

export abstract class SnackbarUtils {
  public static success(message: string) {
    useSnackbarRef.enqueueSnackbar(message, { variant: 'success' });
  }

  public static info(message: string) {
    useSnackbarRef.enqueueSnackbar(message, { variant: 'info' });
  }

  public static warning(message: string) {
    useSnackbarRef.enqueueSnackbar(message, { variant: 'warning' });
  }

  public static error(message: string) {
    useSnackbarRef.enqueueSnackbar(message, { variant: 'error' });
  }
}
