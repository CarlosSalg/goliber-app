import React from 'react'

export const Components = () => {
  return (
    <div>
        <div>
            <h1>Titulo</h1>
            <h2>Titulo</h2>
            <h3>Titulo</h3>
            <h4>Titulo</h4>
            <h5>Titulo</h5>
            <h6>Titulo</h6>
            <p>lorem title parrafro, test</p>
            <a href='/'>Link</a> <br/>
            <span>span</span> <br />  <br />
            <button className='btn button__primary'>Primario</button> <br /> <br />
            <button className='btn button__secondary'>Secundario</button>  <br />
            <div class="mb-3 mt-5">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
        </div>
    </div>
  )
}
