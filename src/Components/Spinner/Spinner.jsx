import React from 'react'

export default function Spinner() {
    return (
        <div class="d-flex justify-content-center ">
            <div class="spinner-grow text-warning" style={{ width: '3rem', height: '3rem' }} role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
