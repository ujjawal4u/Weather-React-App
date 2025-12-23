import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';


export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">{<DeleteIcon />}</Button>
       <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      <Button color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </Button>
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      Here is a gentle confirmation that your action was successful.
    </Alert>
    </Stack>
  );
}
