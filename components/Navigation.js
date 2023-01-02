import Router from 'next/router';

const Navigation = () => {

    return (
        <div className='flex space-x-10 mb-10'>
            <p className='cursor-pointer' onClick={() => Router.push('/')}>The Generator</p>
            <p className='cursor-pointer' onClick={() => Router.push('/about')}>About</p>
        </div>
    );

};

export default Navigation;