import { Box, Stack } from '@mui/material';
import x from '../../images/Error404.jfif';


export default function NotFound() {
  return (
    <Stack alignItems={'center'} justifyContent={'center'} height={'75vh'}>
    <div className='container d-flex align-items-center py-5'>
    <div className='py-5'>
        <h1 className='text-dark my-5'>
            Page Not Found
        </h1>
        <p className='text-muted mb-5'>
            We couldn&apos;t find what you were looking for.
        </p>
        <p className='text-dark'>
            Please contact the owner of the site that linked you to the original URL <br/> and let them know their link is broken.
        </p>
    </div>

</div>
    <Box className=" text-center py-5 " alignItems={'center'} justifyContent={'center'} >
        <img src={x} alt="" />
      </Box>
      </Stack>
  )
}
