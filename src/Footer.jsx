import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer>
                <div  style={{display:"flex",justifyContent:"center"}} className="footer-top">
                    <a href="dashboard" className="footer-logo"><img src="images/logo.png" className="logo1" /></a>
                </div>
                <div className="footer-top">
                    <div  style={{display:"flex",justifyContent:"center"}} className="footer-column footer-column_center social-icons">
                        <div className="darkblue-bg">
                            <div className="footer-icon_monocolor">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 20" className="Icon_icon__2Th0s">
                                    <path d="M10.603 10H6.687v9.8H2.174V10H0V6.794h2.175V4.712C2.174 1.882 3.485.2 7.06.2h4.12v3.469H7.814c-.999-.002-1.122.484-1.122 1.389l-.006 1.736H11.2z">
                                    </path>
                                </svg>
                            </div>
                            <div className="footer-icon_monocolor ms-4">
                                <svg viewBox="0 -31 512 512" xmlns="http://www.w3.org/2000/svg" className="Icon_icon__2Th0s">
                                    <path d="M123.195 260.738l63.68 159.188 82.902-82.903L411.918 450 512 0 0 213.266zm242.5-131.629L208.98 272.051l-19.52 73.566-36.058-90.164zm0 0">
                                    </path>
                                </svg>
                            </div>
                            <div className="footer-icon_monocolor ms-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 60" className="Icon_icon__2Th0s">
                                    <path fill="#1183d3" d="M63 14.87a7.885 7.885 0 00-5.56-5.56C52.54 8 32.88 8 32.88 8S13.23 8 8.32 9.31c-2.7.72-4.83 2.85-5.56 5.56C1.45 19.77 1.45 30 1.45 30s0 10.23 1.31 15.13c.72 2.7 2.85 4.83 5.56 5.56C13.23 52 32.88 52 32.88 52s19.66 0 24.56-1.31c2.7-.72 4.83-2.85 5.56-5.56C64.31 40.23 64.31 30 64.31 30s0-10.23-1.31-15.13z">
                                    </path>
                                    <path fill="#04386e" d="M26.6 39.43L42.93 30 26.6 20.57z" />
                                </svg>
                            </div>
                            <div className="footer-icon_monocolor ms-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 169 169" className="Icon_icon__2Th0s">
                                    <path d="M122.406 0H46.654C20.929 0 0 20.93 0 46.655v75.752c0 25.726 20.929 46.655 46.654 46.655h75.752c25.727 0 46.656-20.93 46.656-46.655V46.655C169.063 20.93 148.133 0 122.406 0zm31.657 122.407c0 17.455-14.201 31.655-31.656 31.655H46.654C29.2 154.063 15 139.862 15 122.407V46.655C15 29.201 29.2 15 46.654 15h75.752c17.455 0 31.656 14.201 31.656 31.655v75.752z">
                                    </path>
                                    <path d="M84.531 40.97c-24.021 0-43.563 19.542-43.563 43.563 0 24.02 19.542 43.561 43.563 43.561s43.563-19.541 43.563-43.561c0-24.021-19.542-43.563-43.563-43.563zm0 72.123c-15.749 0-28.563-12.812-28.563-28.561 0-15.75 12.813-28.563 28.563-28.563s28.563 12.813 28.563 28.563c0 15.749-12.814 28.561-28.563 28.561zm45.39-84.842c-2.89 0-5.729 1.17-7.77 3.22a11.053 11.053 0 00-3.23 7.78c0 2.891 1.18 5.73 3.23 7.78 2.04 2.04 4.88 3.22 7.77 3.22 2.9 0 5.73-1.18 7.78-3.22 2.05-2.05 3.22-4.89 3.22-7.78 0-2.9-1.17-5.74-3.22-7.78-2.04-2.05-4.88-3.22-7.78-3.22z">
                                    </path>
                                </svg>
                            </div>
                            <div className="footer-icon_monocolor ms-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="Icon_icon__2Th0s">
                                    <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className="footer-middle">
                    <div className="footer-top footer-highlight providers">
                        <div className="footer-column footer-column_center">
                            <div className="providers-icons d-flex justify-content-between align-items-center">
                                <div className="footer-icon mastercard">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 155.58" className="Icon_icon__2Th0s">
                                        <path d="M195.93 153.396v.405h.373c.082 0 .153-.02.204-.051.047-.032.075-.087.075-.153s-.028-.118-.075-.15a.358.358 0 00-.204-.05zm.376-.283c.193 0 .342.044.448.13s.158.204.158.354c0 .125-.04.228-.126.31a.613.613 0 01-.358.15l.495.57h-.385l-.46-.567h-.149v.566h-.322v-1.513zm-.098 2.036c.177 0 .342-.036.491-.102a1.252 1.252 0 00.77-1.171c0-.177-.035-.342-.098-.495-.066-.154-.157-.291-.27-.405s-.248-.205-.402-.271c-.149-.063-.314-.095-.49-.095s-.347.032-.5.095c-.157.066-.295.157-.408.27s-.205.252-.268.406c-.067.153-.098.318-.098.495s.031.342.098.495c.063.157.154.29.268.405s.251.204.408.27c.153.067.322.103.5.103m0-2.904c.231 0 .443.043.648.13a1.645 1.645 0 01.88.868c.086.196.13.409.13.633s-.044.436-.13.632-.204.37-.354.519a1.785 1.785 0 01-.526.35c-.205.086-.417.13-.649.13a1.704 1.704 0 01-1.187-.48c-.149-.15-.267-.322-.353-.519s-.13-.408-.13-.632.043-.437.13-.633a1.6 1.6 0 01.354-.519c.149-.15.326-.267.53-.35.204-.086.42-.13.656-.13m-153.102-5.827c0-2.884 1.89-5.254 4.979-5.254 2.951 0 4.943 2.268 4.943 5.254s-1.992 5.254-4.943 5.254c-3.089 0-4.979-2.37-4.979-5.254m13.286 0v-8.205h-3.568v1.992c-1.132-1.477-2.849-2.404-5.183-2.404-4.602 0-8.21 3.607-8.21 8.617 0 5.014 3.608 8.618 8.21 8.618 2.334 0 4.051-.927 5.183-2.405v1.992h3.568zm120.577 0c0-2.884 1.89-5.254 4.979-5.254 2.955 0 4.943 2.268 4.943 5.254s-1.988 5.254-4.943 5.254c-3.089 0-4.98-2.37-4.98-5.254m13.29 0v-14.795h-3.571v8.582c-1.132-1.477-2.85-2.404-5.183-2.404-4.602 0-8.21 3.607-8.21 8.617 0 5.014 3.608 8.618 8.21 8.618 2.334 0 4.051-.927 5.183-2.405v1.992h3.572zm-89.575-5.423c2.299 0 3.776 1.443 4.154 3.981H96.32c.381-2.37 1.82-3.98 4.362-3.98m.07-3.195c-4.81 0-8.173 3.5-8.173 8.617 0 5.219 3.501 8.618 8.413 8.618 2.472 0 4.736-.617 6.728-2.299l-1.749-2.645c-1.375 1.097-3.128 1.718-4.774 1.718-2.3 0-4.394-1.065-4.908-4.02h12.185c.036-.444.071-.892.071-1.372-.035-5.116-3.195-8.617-7.792-8.617m43.084 8.617c0-2.884 1.89-5.254 4.979-5.254 2.951 0 4.943 2.268 4.943 5.254s-1.992 5.254-4.943 5.254c-3.089 0-4.979-2.37-4.979-5.254m13.286 0v-8.205h-3.568v1.992c-1.136-1.477-2.849-2.404-5.183-2.404-4.602 0-8.21 3.607-8.21 8.617 0 5.014 3.608 8.618 8.21 8.618 2.334 0 4.047-.927 5.183-2.405v1.992h3.568zm-33.437 0c0 4.98 3.466 8.618 8.755 8.618 2.472 0 4.118-.55 5.903-1.957l-1.714-2.884c-1.34.962-2.747 1.477-4.295 1.477-2.849-.035-4.943-2.094-4.943-5.254s2.094-5.218 4.943-5.254c1.548 0 2.955.515 4.295 1.478l1.714-2.884c-1.785-1.407-3.431-1.957-5.903-1.957-5.289 0-8.755 3.638-8.755 8.617m46.004-8.617c-2.059 0-3.399.962-4.326 2.404v-1.992h-3.537v16.41h3.572v-9.199c0-2.715 1.167-4.224 3.501-4.224.723 0 1.478.102 2.232.412l1.1-3.363c-.79-.31-1.819-.448-2.542-.448m-95.65 1.717c-1.718-1.132-4.084-1.717-6.693-1.717-4.158 0-6.834 1.992-6.834 5.253 0 2.677 1.993 4.327 5.663 4.842l1.686.24c1.957.275 2.88.79 2.88 1.717 0 1.269-1.304 1.992-3.74 1.992-2.473 0-4.257-.79-5.46-1.717l-1.68 2.778c1.956 1.442 4.428 2.13 7.104 2.13 4.739 0 7.486-2.232 7.486-5.356 0-2.885-2.162-4.394-5.734-4.908l-1.681-.244c-1.545-.204-2.783-.51-2.783-1.611 0-1.203 1.167-1.922 3.124-1.922 2.095 0 4.123.79 5.117 1.407zm46.039-1.717c-2.06 0-3.4.962-4.323 2.404v-1.992h-3.537v16.41h3.568v-9.199c0-2.715 1.168-4.224 3.502-4.224.723 0 1.477.102 2.232.412l1.1-3.363c-.79-.31-1.82-.448-2.542-.448m-30.451.412h-5.836v-4.979h-3.607v4.98h-3.328v3.26h3.328v7.487c0 3.807 1.478 6.075 5.698 6.075 1.548 0 3.332-.48 4.464-1.27l-1.03-3.057c-1.064.617-2.232.928-3.159.928-1.784 0-2.366-1.1-2.366-2.747v-7.415h5.836zm-53.353 16.41v-10.3c0-3.878-2.471-6.487-6.456-6.522-2.094-.036-4.256.617-5.769 2.92-1.131-1.82-2.915-2.92-5.423-2.92-1.752 0-3.465.514-4.805 2.436v-2.024H10.25v16.41h3.603v-9.097c0-2.849 1.58-4.362 4.02-4.362 2.37 0 3.568 1.545 3.568 4.327v9.132h3.608v-9.097c0-2.849 1.646-4.362 4.016-4.362 2.436 0 3.603 1.545 3.603 4.327v9.132z" fill="#fff" />
                                        <path d="M198.13 100.048V97.65h-.625l-.723 1.646-.72-1.646h-.628v2.397h.444V98.24l.676 1.56h.46l.676-1.564v1.812zm-3.965 0v-1.989h.801v-.404h-2.043v.404h.802v1.989z" fill="#f79410" />
                                        <path d="M127.082 110.359H73.004V13.171h54.078z" fill="#ff5f00" />
                                        <path d="M76.469 61.757c0-19.715 9.23-37.276 23.605-48.593A61.538 61.538 0 0061.878-.052C27.745-.052.077 27.621.077 61.758s27.668 61.808 61.801 61.808a61.538 61.538 0 0038.196-13.215C85.699 99.034 76.469 81.472 76.469 61.757" fill="#eb001b" />
                                        <path d="M200.016 61.757c0 34.137-27.668 61.81-61.801 61.81a61.557 61.557 0 01-38.2-13.216c14.378-11.317 23.61-28.879 23.61-48.594s-9.232-37.276-23.61-48.593a61.557 61.557 0 0138.2-13.216c34.133 0 61.801 27.673 61.801 61.81" fill="#f79e1b" />
                                    </svg>
                                </div>
                                <div className="footer-icon mastercard">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 27" className="Icon_icon__2Th0s">
                                        <path fill="#FFF" d="M59.532 1.627l-5.335 24.992h-6.459l5.336-24.992h6.458zM86.715 17.8l3.426-9.379 1.966 9.38h-5.392zm7.245 8.818h5.953L94.69 1.627h-5.504c-1.235 0-2.302.73-2.752 1.853l-9.716 23.139h6.796l1.348-3.707h8.312l.786 3.707zm-16.905-8.144c.056-6.57-9.098-6.964-9.042-9.884 0-.899.899-1.854 2.752-2.078.899-.113 3.482-.225 6.346 1.123l1.124-5.28c-1.573-.561-3.539-1.123-6.066-1.123-6.402 0-10.895 3.37-10.895 8.256-.057 3.595 3.2 5.617 5.672 6.796 2.527 1.236 3.37 2.022 3.37 3.089 0 1.685-2.022 2.415-3.875 2.471-3.258.056-5.111-.898-6.628-1.572l-1.18 5.503c1.517.674 4.325 1.292 7.19 1.348 6.795-.112 11.232-3.482 11.232-8.649M50.322 1.627L39.876 26.619h-6.852L27.857 6.68c-.337-1.235-.562-1.685-1.517-2.19-1.572-.843-4.1-1.629-6.346-2.134l.168-.73H31.17c1.404 0 2.64.954 2.977 2.527l2.696 14.434 6.74-17.018h6.739">
                                        </path>
                                    </svg>
                                </div>
                                <div className="footer-icon mastercard">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 27" className="Icon_icon__2Th0s">
                                        <circle fill="#EE0005" transform="translate(-32)" cx="55.4" cy="13.5" r={11} />
                                        <circle fill="#0098E2" transform="translate(-32)" cx="69.1" cy="13.5" r={11} />
                                        <path fill="#6C69BF" d="M26.1 13.5c0 3.5 1.6 6.6 4.2 8.6 2.5-2 4.2-5.1 4.2-8.6s-1.6-6.6-4.2-8.6c-2.6 2-4.2 5.1-4.2 8.6z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="footer-icon mastercard">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 27" className="Icon_icon__2Th0s">
                                        <path fill="#FFF" d="M101.8.2c2 0 3.9.5 5.6 1.3.3.1.5.3.8.4l-1.2 1-1.8-1.8-3 2.7-1.8-1.9-5.6 5 3.6 3.9-1.3 1.2 3.5 3.9-1.4 1.2 5 5.5 3-2.7 2.6 2.9c-.5.4-1.1.8-1.7 1.1-1.9 1-4 1.6-6.3 1.6-7.1 0-12.8-5.7-12.8-12.7C89 5.9 94.8.2 101.8.2zm-2.3 11.9l3.1-2.7 2.7 3-3.1 2.7-2.7-3zm2.2 5.3l3-2.7 2.8 3-3.1 2.7-2.7-3zM97.3 7l3.1-2.7 2.7 3L100 10l-2.7-3zm5.6-1.5l2.3-2 2.1 2.3-2.3 2-2.1-2.3zm4.1 9.3l2.3-2 2.1 2.3-2.3 2-2.1-2.3zm2 4.6l2.3-2 2.1 2.3-2.3 2.1-2.1-2.4zm.9-10.5l1.5-1.4 1.4 1.5-1.5 1.4-1.4-1.5zM108 4.5l1.5-1.4 1.4 1.5-1.6 1.4-1.3-1.5zm3.9 8.9l1.5-1.4 1.4 1.5-1.5 1.4-1.4-1.5zm-6.9-3.3l2.3-2 2.1 2.3-2.3 2-2.1-2.3zM10.9 9.009h-.2l-2.1 8.2H6.8l-2.7-11.7H6l1.8 8.7h.1l2.2-8.7h1.4l2.3 8.7h.1l1.7-8.7h1.9l-2.6 11.7h-1.8zm9 3.191h3.8c-.1-1.7-.9-2.4-1.8-2.4-1.1 0-1.9.8-2 2.4m5 3.1v1.3c-.7.4-1.7.8-2.9.8-2.8 0-3.9-1.7-3.9-4.3 0-2.5 1.3-4.3 3.7-4.3 2.1 0 3.3 1.3 3.3 4v.6h-5.4c0 2 .8 2.9 2.5 2.9 1-.1 1.8-.4 2.7-1m4.1.7c.5.2 1.1.3 1.5.3 1.2 0 2.1-.8 2.1-3.4 0-2.1-.8-2.8-1.9-2.8-.7 0-1.1.2-1.8.5L29 16zm0-6.6c.5-.3 1.3-.6 2.2-.6 2 0 3.1 1.4 3.1 4.1 0 3.1-1.5 4.6-3.9 4.6-.9 0-2.2-.3-3.2-.8V5.1l1.8-.4v4.7zm12.8 5.3h.1l3.5-9.2h2v11.7h-1.8V8.7h-.1l-3.4 8.5h-1l-3.4-8.3h-.1v8.3h-1.5V5.5h2zM54.7 13c0-2.2-.9-3.2-2-3.2s-2 .9-2 3.2c0 2.3.9 3.2 2 3.2s2-.9 2-3.2m-5.8 0c0-2.9 1.6-4.3 3.7-4.3 2.2 0 3.7 1.4 3.7 4.3 0 2.8-1.5 4.3-3.7 4.3s-3.7-1.5-3.7-4.3m8.8-3.1c.7-.4 2.3-1.2 4.2-1.2 2 0 2.7.8 2.7 2.5v6h-1.7v-5.6c0-1.3-.6-1.5-1.5-1.5-.7 0-1.5.3-2 .6v6.5h-1.7V9.9zm10.5 2.3H72c-.1-1.7-.9-2.4-1.8-2.4-1 0-1.8.8-2 2.4m5.1 3.1v1.3c-.7.4-1.7.8-2.9.8-2.8 0-3.9-1.7-3.9-4.3 0-2.5 1.3-4.3 3.7-4.3 2.1 0 3.3 1.3 3.3 4v.6h-5.4c0 2 .8 2.9 2.5 2.9 1-.1 1.8-.4 2.7-1m7.1-6.6h1.8l-3 8.3c-.8 2.3-1.8 3.5-3.7 3.5v-1.4c1.1 0 1.8-.9 2.2-2.1l-3.2-8.3h1.8l2.1 6.1h.1l1.9-6.1z">
                                        </path>
                                        <path fill="#C0DAEC" d="M21.9 24.8v-.7c.6.3 1.2.5 1.7.5s.8-.1 1.1-.3c.2-.2.4-.4.4-.7 0-.3-.1-.5-.3-.6-.2-.1-.6-.3-1.1-.5-.2-.1-.3-.1-.4-.1-.1 0-.2-.1-.3-.1-.2-.1-.3-.1-.3-.1s-.1-.1-.2-.1c-.1-.1-.2-.1-.2-.2s-.1-.1-.2-.2-.1-.2-.1-.2c0-.1 0-.2-.1-.3v-.3c0-.5.2-.8.5-1.1.3-.3.8-.4 1.4-.4.5 0 1.1.1 1.6.3v.8c-.5-.3-1-.4-1.6-.4-.4 0-.6.1-.8.2-.2.2-.3.4-.3.6 0 .3.1.5.3.6.2.1.5.3 1 .5.8.3 1.3.6 1.6.8.3.2.4.6.4 1.1 0 .5-.2.9-.6 1.2-.4.3-1 .5-1.7.5-.7-.4-1.3-.5-1.8-.8zm8.3.3h-.8l-.1-.5c-.5.4-.9.6-1.4.6-.4 0-.7-.1-.9-.3-.2-.2-.3-.5-.3-.8 0-.2 0-.3.1-.5s.2-.3.3-.5c.1-.1.4-.3.7-.4.3-.1.6-.1 1-.1h.5v-.2c0-.4-.1-.6-.2-.8-.1-.1-.4-.2-.7-.2-.4 0-.9.2-1.4.5v-.7c.6-.3 1.2-.4 1.7-.4s.9.1 1.1.3c.2.2.3.6.3 1l.1 3zm-.9-1.9h-.4c-.9 0-1.3.3-1.3.8 0 .2.1.3.2.4.1.1.3.1.4.1.2 0 .4-.1.7-.2.2-.1.4-.2.5-.4l-.1-.7zm2.2 3.6v-5.3c.2-.2.5-.3.8-.4.3-.1.6-.2 1-.2 1.1 0 1.7.7 1.7 2.1 0 .7-.1 1.3-.4 1.6-.3.4-.7.6-1.3.6-.4 0-.7-.1-1-.3v1.9h-.8zm.9-5.1v2.5c.1.1.2.2.4.2.2.1.3.1.4.1.3 0 .5-.1.7-.4.2-.2.3-.7.3-1.3 0-.5-.1-.9-.3-1.1-.2-.2-.4-.3-.7-.3-.3.1-.6.2-.8.3zm4.6-.8v4.2h-.8v-4l.8-.2zm-1-1.2c0-.1.1-.3.2-.4.1-.1.2-.2.4-.2.1 0 .3.1.4.2.1.1.2.2.2.4 0 .1-.1.3-.2.4-.1.1-.2.2-.4.2-.1 0-.3-.1-.4-.2-.1-.1-.2-.3-.2-.4zm4.2 4.9c.4 0 .8-.1 1.3-.4v.6c-.4.3-.9.4-1.4.4-.7 0-1.2-.2-1.5-.6-.3-.4-.5-.9-.5-1.6 0-.7.2-1.2.5-1.6.3-.4.8-.6 1.4-.6.5 0 .9.2 1.2.5.3.3.4.8.4 1.5v.3h-2.7c0 .5.1.9.3 1.1.2.3.5.4 1 .4zm-.3-3.2c-.3 0-.5.1-.6.3-.2.2-.3.5-.3.9h1.9c0-.4-.1-.7-.3-.9-.2-.2-.5-.3-.7-.3zm2.8 3.7v-3.6c.7-.4 1.4-.6 2.1-.6.5 0 .8.1 1 .3.2.2.3.5.3.9v3h-.8v-2.8c0-.3-.1-.5-.2-.6-.1-.1-.3-.2-.5-.2-.3 0-.7.1-1 .3v3.3h-.9zm5.5-4.1h1.3l-.2.6h-1.1v2.2c0 .6.2.8.7.8.2 0 .4 0 .5-.1v.5c-.3.1-.6.1-.9.1-.4 0-.7-.1-.9-.4-.2-.2-.3-.5-.3-.9v-3.4l.8-.6.1 1.2zm3-.1v4.2h-.8v-4l.8-.2zm-1-1.2c0-.1.1-.3.2-.4.1-.1.2-.2.4-.2.1 0 .3.1.4.2.1.1.2.2.2.4 0 .1-.1.3-.2.4-.1.1-.2.2-.4.2-.1 0-.3-.1-.4-.2-.1-.1-.2-.3-.2-.4zm6.8 1.5v.7c-.4-.3-.8-.4-1.2-.4-.2 0-.4 0-.5.1-.1.1-.2.2-.2.4s.1.3.2.4c.1.1.4.2.7.3.2.1.3.1.4.1.1 0 .2.1.4.2.1.1.3.2.3.2.1.1.1.2.2.3.1.1.1.3.1.4 0 .4-.2.7-.5.9-.3.2-.7.3-1.2.3-.6 0-1-.1-1.4-.4v-.6c.5.3.9.4 1.3.4.6 0 .9-.2.9-.6 0-.1 0-.1-.1-.2 0-.1-.1-.1-.1-.2 0 0-.1-.1-.2-.1-.1-.1-.2-.1-.3-.1-.1 0-.2-.1-.3-.1-.2-.1-.4-.2-.5-.2-.1-.1-.3-.1-.4-.2l-.3-.3c-.1-.1-.1-.3-.1-.5s.1-.4.2-.6c.1-.2.3-.3.4-.4.2-.1.3-.1.5-.1h.4c.4-.1.8.1 1.3.3zm4.5 3.9h-.8l-.1-.5c-.5.4-.9.6-1.4.6-.4 0-.7-.1-.9-.3-.2-.2-.3-.5-.3-.8 0-.2 0-.3.1-.5s.2-.3.3-.5c.1-.1.4-.3.7-.4.3-.1.6-.1 1-.1h.5v-.2c0-.4-.1-.6-.2-.8-.1-.1-.4-.2-.7-.2-.4 0-.9.2-1.4.5v-.7c.6-.3 1.2-.4 1.7-.4.6 0 .9.1 1.1.3.2.2.3.6.3 1l.1 3zm-.9-1.9h-.4c-.9 0-1.3.3-1.3.8 0 .2.1.3.2.4.1.1.3.1.4.1.2 0 .4-.1.7-.2.2-.1.4-.2.5-.4l-.1-.7zm3-2.2h1.3l-.2.6h-1.1v2.2c0 .6.2.8.7.8.2 0 .4 0 .5-.1v.5c-.3.1-.6.1-.9.1-.4 0-.7-.1-.9-.4-.2-.2-.3-.5-.3-.9v-3.4l.8-.6.1 1.2z">
                                        </path>
                                  </svg>
                                </div>
                                <div className="footer-icon mastercard">
                                    <img className="Inco_icon_2Th0s" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1280px-UPI-Logo-vector.svg.png" style={{ width: 60 }} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-column footer-column_left antillephone">
                        <div style={{display:"flex",alignItems:"center"}} className="footer__antillephone-license d-flex align-items-start">
                            <div className="antialis-inner ">
                                <a className="d-flex align-items-start">
                                    <img src="images/copyright.png" className="w-100" />
                                </a>
                            </div>
                            <p style={{marginTop:"5px",color:'white'}} className="ftr-txt">Copyright © {new Date().getFullYear()}. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
