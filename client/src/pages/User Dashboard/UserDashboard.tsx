import "./UserDashboard.css";

export default function UserDashboard({ username = "Sasindu" }: { username?: string } = {}) {
    return (
        <div className="db-page">
            <svg className="db-symbols" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                    <symbol id="db-i-brand" viewBox="0 0 24 24"><path fill="var(--nibm-blue)" stroke="none" d="M2 7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v9a5 5 0 0 1-5 5h-5l-5 3v-3a5 5 0 0 1-5-5z" /><path stroke="#ffffff" strokeWidth="2" d="M7 8h10M7 12h7M7 16h4" /></symbol>
                    <symbol id="db-i-bell" viewBox="0 0 24 24"><path d="M18 8a6 6 0 0 0-12 0c0 6-2 7-3 9h18c-1-2-3-3-3-9ZM10 20a2.2 2.2 0 0 0 4 0" /></symbol>
                    <symbol id="db-i-menu" viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18" /></symbol>
                    <symbol id="db-i-close" viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18" /></symbol>
                    <symbol id="db-i-plus" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" /></symbol>
                    <symbol id="db-i-chevron" viewBox="0 0 24 24"><path d="m7 10 5 5 5-5" /></symbol>
                    <symbol id="db-i-logout" viewBox="0 0 24 24"><path d="M10 4H5v16h5m4-12 4 4-4 4m-6-4h10" /></symbol>
                    <symbol id="db-i-complaint" viewBox="0 0 24 24"><path d="M20 14a3 3 0 0 1-3 3h-6l-5 4v-4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3Z" /><path d="M11.5 6.5v4m0 2.6v.2" /></symbol>
                    <symbol id="db-i-feedback" viewBox="0 0 24 24"><path d="M21 11a8.5 8.5 0 0 1-8.8 8.5 11 11 0 0 1-3.3-.5L4 21l.9-4.5A8 8 0 0 1 3 11a9 9 0 0 1 18 0Z" /><path d="M8.5 12.5a4 4 0 0 0 7 0M9 8.3v.3m6-.3v.3" /></symbol>
                    <symbol id="db-i-suggestion" viewBox="0 0 24 24"><path d="M9 18c0-4-4-4.4-4-9a7 7 0 1 1 14 0c0 4.6-4 5-4 9ZM10 21h4" /></symbol>
                    <symbol id="db-i-flag" viewBox="0 0 24 24"><path d="M5 21V4c5-4 9 4 14 0v10c-5 4-9-4-14 0" /></symbol>
                    <symbol id="db-i-calendar" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M7 3v5m10-5v5M3 11h18" /></symbol>
                    <symbol id="db-i-images" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="8.5" cy="8.5" r="1" /><path d="m3 17 5-4 3 2 5-6 5 5" /></symbol>
                    <symbol id="db-i-agree" viewBox="0 0 24 24"><path d="M7 10v11H3V10Zm1 0 5-7c2.5.5 2 4 .8 7H19a2 2 0 0 1 2 2.5l-1.5 6A3 3 0 0 1 17 21h-5l-4-1" /></symbol>
                    <symbol id="db-i-star" viewBox="0 0 24 24"><path fill="currentColor" d="m12 2.8 2.8 5.8 6.4.9-4.6 4.5 1.1 6.4-5.7-3-5.7 3 1.1-6.4-4.6-4.5 6.4-.9Z" /></symbol>
                    <symbol id="db-i-announcement" viewBox="0 0 24 24"><path d="m4 9 7-1 9-4v15l-9-4-7-1Zm3 6 2 6h3l-2-6m1-7v7" /></symbol>
                    <symbol id="db-i-notice" viewBox="0 0 24 24"><path d="M6 3h9l4 4v14H6Zm8 0v5h5M9 12h7m-7 4h5" /></symbol>
                    <symbol id="db-poster" viewBox="0 0 400 156">
                        <rect width="400" height="156" fill="var(--ink)" />
                        <g fill="none" stroke="#46558e" strokeWidth="1">
                            <circle cx="339" cy="61" r="102" /><circle cx="339" cy="61" r="88" /><circle cx="339" cy="61" r="74" /><circle cx="339" cy="61" r="60" />
                            <path d="m206 156 82-156m-64 156L306 0m-65 156L323 0" opacity=".45" />
                        </g>
                        <g fill="#ffffff" fontFamily="Manrope, Arial, sans-serif" fontSize="33" fontWeight="750" letterSpacing="-1.5">
                            <text x="23" y="64">Student</text><text x="23" y="104">Voice Forum</text>
                        </g>
                        <g transform="translate(237 31) rotate(-9 60 40)">
                            <path d="M18 0h88q13 0 13 13v42q0 13-13 13H64L43 85V68H18Q5 68 5 55V13Q5 0 18 0Z" fill="#c0cef0" />
                            <path d="M25 21h63m-63 12h47m-47 12h34" fill="none" stroke="var(--nibm-blue)" strokeWidth="4" strokeLinecap="round" />
                        </g>
                        <path d="M317 80h52q7 0 7 7v25q0 7-7 7h-5v10l-13-10h-34q-7 0-7-7V87q0-7 7-7Z" fill="var(--nibm-red)" />
                        <g fill="#ffffff"><circle cx="329" cy="100" r="3" /><circle cx="342" cy="100" r="3" /><circle cx="355" cy="100" r="3" /></g>
                    </symbol>
                </defs>
            </svg>
            <header className="db-header">
                <div className="db-header-inner">
                    <button className="db-icon-button db-menu-toggle" type="button" popoverTarget="db-drawer" aria-label="Open navigation"><svg className="db-icon" aria-hidden="true"><use href="#db-i-menu" /></svg></button>
                    <a className="db-brand" href="/dashboard" aria-label="Anonymous Complaint System home">
                        <svg className="db-icon" aria-hidden="true"><use href="#db-i-brand" /></svg>
                        <span>Anonymous<br />Complaint System</span>
                    </a>
                    <nav className="db-nav" aria-label="Main navigation">
                        <a className="db-current" href="/dashboard" aria-current="page">Home</a>
                        <button type="button" popoverTarget="db-explore">Explore</button>
                        <div id="db-explore" popover="auto" className="db-panel db-nav-panel">
                            <strong>Explore</strong>
                            <a href="/complaints">Complaints</a>
                            <a href="/feedback">Feedback</a>
                            <a href="/suggestions">Suggestions</a>
                            <a href="/announcements">Announcements</a>
                            <a href="/notices">Notices</a>
                        </div>
                        <button type="button" popoverTarget="db-personal">My Submissions</button>
                        <div id="db-personal" popover="auto" className="db-panel db-nav-panel">
                            <strong>My Submissions</strong>
                            <a href="/my-submissions">My Submissions</a>
                            <a href="/my-submissions/need-attention">Need Attention</a>
                        </div>
                    </nav>
                    <div className="db-tools">
                        <button className="db-bell db-icon-button" type="button" popoverTarget="db-notifications" aria-label="Notifications, unread messages"><svg className="db-icon" aria-hidden="true"><use href="#db-i-bell" /></svg></button>
                        <div id="db-notifications" popover="auto" className="db-panel db-notifications">
                            <strong>Notifications</strong>
                            <ul><li>A new campus announcement is available.</li></ul>
                            <p className="db-empty">No notifications.</p>
                        </div>
                        <button className="db-account" type="button" popoverTarget="db-account-menu" aria-label={`Account menu for ${username}`}>
                            <span className="db-initial">{username.charAt(0).toUpperCase()}</span>
                            <span className="db-username">{username}</span>
                            <svg className="db-icon" aria-hidden="true"><use href="#db-i-chevron" /></svg>
                        </button>
                        <div id="db-account-menu" popover="auto" className="db-panel db-account-menu">
                            <strong>{username}</strong>
                            <button type="button" disabled><svg className="db-icon" aria-hidden="true"><use href="#db-i-logout" /></svg>Logout</button>
                        </div>
                    </div>
                </div>
            </header>
            <nav id="db-drawer" className="db-drawer" popover="auto" aria-label="Mobile navigation">
                <div className="db-drawer-top"><span className="db-brand"><svg className="db-icon" aria-hidden="true"><use href="#db-i-brand" /></svg><span>Anonymous<br />Complaint System</span></span><button className="db-icon-button" type="button" popoverTarget="db-drawer" popoverTargetAction="hide" aria-label="Close navigation"><svg className="db-icon" aria-hidden="true"><use href="#db-i-close" /></svg></button></div>
                <a href="/dashboard" aria-current="page">Home</a>
                <strong>Explore</strong>
                <a href="/complaints">Complaints</a>
                <a href="/feedback">Feedback</a>
                <a href="/suggestions">Suggestions</a>
                <a href="/announcements">Announcements</a>
                <a href="/notices">Notices</a>
                <strong>My Submissions</strong>
                <a href="/my-submissions">My Submissions</a>
                <a href="/my-submissions/need-attention">Need Attention</a>
            </nav>
            <main className="db-main">
                <section className="db-welcome" aria-labelledby="db-welcome">
                    <div>
                        <h1 id="db-welcome">Welcome, {username}!</h1>
                        <p>Share your voice and stay updated with the NIBM community.</p>
                    </div>
                    <a className="db-primary" href="/submissions/new"><svg className="db-icon" aria-hidden="true"><use href="#db-i-plus" /></svg>New Submission</a>
                </section>
                <div className="db-columns">
                    <section className="db-stream" aria-label="Public community submissions">
                        <div className="db-feed">
                            <article className="db-card db-submission" aria-labelledby="db-title-00125">
                                <div className="db-card-top">
                                    <span className="db-type db-complaint"><svg className="db-icon" aria-hidden="true"><use href="#db-i-complaint" /></svg>Complaint</span>
                                    <span className="db-id">#00125</span>
                                    <div className="db-report">
                                        <button type="button" className="db-icon-button" aria-label="Report submission 00125" popoverTarget="db-report-00125"><svg className="db-icon" aria-hidden="true"><use href="#db-i-flag" /></svg></button>
                                        <div className="db-panel db-report-panel" id="db-report-00125" popover="auto">
                                            <strong>Report submission</strong>
                                            <label htmlFor="db-reason-00125">Reason for reporting</label>
                                            <textarea id="db-reason-00125" rows={3} />
                                            <button type="button" className="db-small-action" disabled>Submit report</button>
                                        </div>
                                    </div>
                                </div>
                                <h2 id="db-title-00125">Congestion at the main entrance</h2>
                                <p className="db-preview">The walkway near the main gate gets crowded before morning lectures. It can be difficult to get through when several buses arrive at the same time.</p>
                                <div className="db-photo">
                                    <img src="/nibm-colombo.jpg" alt="NIBM Colombo campus and its main entrance" width="688" height="750" />
                                    <span className="db-image-count" aria-label="One additional image"><svg className="db-icon" aria-hidden="true"><use href="#db-i-images" /></svg> +1</span>
                                </div>
                                <div className="db-card-meta"><time dateTime="2026-11-26T10:30:00+05:30"><svg className="db-icon" aria-hidden="true"><use href="#db-i-calendar" /></svg>26 Nov 2026, 10:30 AM</time><button className="db-link" type="button" aria-haspopup="dialog" aria-controls="db-details-00125" {...{ command: "show-modal", commandfor: "db-details-00125" }}>Read More</button></div>
                                <div className="db-engagement" aria-label="Complaint engagement">
                                    <span className="db-vote"><svg className="db-icon" aria-hidden="true"><use href="#db-i-agree" /></svg>Agree <b>24</b></span>
                                    <span className="db-vote db-disagree"><svg className="db-icon" aria-hidden="true"><use href="#db-i-agree" /></svg>Disagree <b>3</b></span>
                                </div>
                            </article>
                            <article className="db-card db-submission" aria-labelledby="db-title-00124">
                                <div className="db-card-top">
                                    <span className="db-type db-feedback"><svg className="db-icon" aria-hidden="true"><use href="#db-i-feedback" /></svg>Feedback</span>
                                    <span className="db-id">#00124</span>
                                    <div className="db-report">
                                        <button type="button" className="db-icon-button" aria-label="Report submission 00124" popoverTarget="db-report-00124"><svg className="db-icon" aria-hidden="true"><use href="#db-i-flag" /></svg></button>
                                        <div className="db-panel db-report-panel" id="db-report-00124" popover="auto">
                                            <strong>Report submission</strong>
                                            <label htmlFor="db-reason-00124">Reason for reporting</label>
                                            <textarea id="db-reason-00124" rows={3} />
                                            <button type="button" className="db-small-action" disabled>Submit report</button>
                                        </div>
                                    </div>
                                </div>
                                <h2 id="db-title-00124">A thank you to the library team</h2>
                                <p className="db-preview">The library staff helped our group find the references we needed for our final project, even on a busy afternoon. We really appreciated their patience and advice.</p>
                                <div className="db-card-meta"><time dateTime="2026-11-25T14:15:00+05:30"><svg className="db-icon" aria-hidden="true"><use href="#db-i-calendar" /></svg>25 Nov 2026, 2:15 PM</time><button className="db-link" type="button" aria-haspopup="dialog" aria-controls="db-details-00124" {...{ command: "show-modal", commandfor: "db-details-00124" }}>Read More</button></div>
                                <div className="db-engagement" aria-label="Feedback engagement">
                                    <span className="db-reaction"><span role="img" aria-label="Like">👍</span> 12</span>
                                    <span className="db-reaction"><span role="img" aria-label="Love">❤️</span> 8</span>
                                    <span className="db-reaction"><span role="img" aria-label="Support">🤝</span> 5</span>
                                    <span className="db-reaction"><span role="img" aria-label="Celebrate">🎉</span> 3</span>
                                </div>
                            </article>
                            <article className="db-card db-submission" aria-labelledby="db-title-00123">
                                <div className="db-card-top">
                                    <span className="db-type db-suggestion"><svg className="db-icon" aria-hidden="true"><use href="#db-i-suggestion" /></svg>Suggestion</span>
                                    <span className="db-id">#00123</span>
                                    <div className="db-report">
                                        <button type="button" className="db-icon-button" aria-label="Report submission 00123" popoverTarget="db-report-00123"><svg className="db-icon" aria-hidden="true"><use href="#db-i-flag" /></svg></button>
                                        <div className="db-panel db-report-panel" id="db-report-00123" popover="auto">
                                            <strong>Report submission</strong>
                                            <label htmlFor="db-reason-00123">Reason for reporting</label>
                                            <textarea id="db-reason-00123" rows={3} />
                                            <button type="button" className="db-small-action" disabled>Submit report</button>
                                        </div>
                                    </div>
                                </div>
                                <h2 id="db-title-00123">More charging points in study spaces</h2>
                                <p className="db-preview">A few extra power outlets around the shared study tables would make it easier to work on campus between lectures, especially during group projects.</p>
                                <div className="db-card-meta"><time dateTime="2026-11-25T09:45:00+05:30"><svg className="db-icon" aria-hidden="true"><use href="#db-i-calendar" /></svg>25 Nov 2026, 9:45 AM</time><button className="db-link" type="button" aria-haspopup="dialog" aria-controls="db-details-00123" {...{ command: "show-modal", commandfor: "db-details-00123" }}>Read More</button></div>
                                <div className="db-engagement" aria-label="Suggestion engagement">
                                    <span className="db-rating"><svg className="db-icon" aria-hidden="true"><use href="#db-i-star" /></svg><b>4.2</b> (25 ratings)</span>
                                </div>
                            </article>
                        </div>
                        <p className="db-empty">No items available.</p>
                    </section>
                    <aside className="db-aside">
                        <section className="db-card db-bulletin" aria-labelledby="db-announcements">
                            <header className="db-section-head">
                                <h2 id="db-announcements"><span><svg className="db-icon" aria-hidden="true"><use href="#db-i-announcement" /></svg></span>Announcements</h2>
                                <a className="db-link" href="/announcements">View All</a>
                            </header>
                            <div className="db-section-items">
                                <article>
                                    <svg className="db-poster" viewBox="0 0 400 156" role="img" aria-label="Student Voice Forum poster"><use href="#db-poster" /></svg>
                                    <h3>Join the Student Voice Forum</h3>
                                    <p className="db-preview">Meet the student affairs team and share your ideas for a better campus experience.</p>
                                    <div className="db-card-meta"><time dateTime="2026-11-25T11:00:00+05:30"><svg className="db-icon" aria-hidden="true"><use href="#db-i-calendar" /></svg>25 Nov 2026, 11:00 AM</time><button className="db-link" type="button" aria-haspopup="dialog" aria-controls="db-details-forum" {...{ command: "show-modal", commandfor: "db-details-forum" }}>Read More</button></div>
                                </article>
                            </div>
                            <p className="db-empty">No items available.</p>
                        </section>
                        <section className="db-card db-bulletin" aria-labelledby="db-notices">
                            <header className="db-section-head">
                                <h2 id="db-notices"><span><svg className="db-icon" aria-hidden="true"><use href="#db-i-notice" /></svg></span>Notices</h2>
                                <a className="db-link" href="/notices">View All</a>
                            </header>
                            <div className="db-section-items">
                                <article>
                                    <h3>Extended library hours</h3>
                                    <p className="db-preview">The campus library will stay open until 8:00 PM on weekdays during the assessment period.</p>
                                    <div className="db-card-meta"><time dateTime="2026-11-24T16:30:00+05:30"><svg className="db-icon" aria-hidden="true"><use href="#db-i-calendar" /></svg>24 Nov 2026, 4:30 PM</time><button className="db-link" type="button" aria-haspopup="dialog" aria-controls="db-details-library" {...{ command: "show-modal", commandfor: "db-details-library" }}>Read More</button></div>
                                </article>
                            </div>
                            <p className="db-empty">No items available.</p>
                        </section>
                    </aside>
                </div>
            </main>
            <footer className="db-footer">
                <div><span>© 2026 NIBM. All rights reserved.</span><nav aria-label="Legal"><a role="link" aria-disabled="true">Privacy Policy</a><a role="link" aria-disabled="true">Terms of Use</a></nav></div>
            </footer>
            <dialog className="db-dialog" id="db-details-00125" aria-labelledby="db-dialog-title-00125">
                <form method="dialog"><button className="db-icon-button" aria-label="Close details"><svg className="db-icon" aria-hidden="true"><use href="#db-i-close" /></svg></button></form>
                <span className="db-type db-complaint"><svg className="db-icon" aria-hidden="true"><use href="#db-i-complaint" /></svg>Complaint</span> <span className="db-id">#00125</span>
                <h2 id="db-dialog-title-00125">Congestion at the main entrance</h2>
                <time dateTime="2026-11-26T10:30:00+05:30"><svg className="db-icon" aria-hidden="true"><use href="#db-i-calendar" /></svg>26 Nov 2026, 10:30 AM</time>
                <p>The walkway near the main gate gets crowded before morning lectures. It can be difficult to get through when several buses arrive at the same time.</p>
                <p>A marked waiting area beside the gate could keep the pedestrian route clear during the morning rush. The attached sketch shows where the queue usually forms.</p>
                <img src="/nibm-colombo.jpg" alt="NIBM Colombo campus and its main entrance" width="688" height="750" />
                <svg className="db-sketch" viewBox="0 0 480 148" role="img" aria-label="Entrance sketch showing the bus stop, waiting area and path to the main gate">
                    <rect width="480" height="148" fill="#f3f5fa" />
                    <path d="M0 108h480" stroke="#c7cfdd" strokeWidth="28" />
                    <path d="M0 108h480" stroke="white" strokeWidth="2" strokeDasharray="14 9" />
                    <path d="M230 94V38h88" fill="none" stroke="var(--nibm-blue)" strokeWidth="3" strokeDasharray="6 3" />
                    <g fill="var(--ink)" fontFamily="sans-serif" fontSize="14">
                        <text x="28" y="84">Bus stop</text><text x="132" y="34">Waiting area</text><text x="322" y="43">Main gate</text>
                    </g>
                </svg>
            </dialog>
            <dialog className="db-dialog" id="db-details-00124" aria-labelledby="db-dialog-title-00124">
                <form method="dialog"><button className="db-icon-button" aria-label="Close details"><svg className="db-icon" aria-hidden="true"><use href="#db-i-close" /></svg></button></form>
                <span className="db-type db-feedback"><svg className="db-icon" aria-hidden="true"><use href="#db-i-feedback" /></svg>Feedback</span> <span className="db-id">#00124</span>
                <h2 id="db-dialog-title-00124">A thank you to the library team</h2>
                <time dateTime="2026-11-25T14:15:00+05:30"><svg className="db-icon" aria-hidden="true"><use href="#db-i-calendar" /></svg>25 Nov 2026, 2:15 PM</time>
                <p>The library staff helped our group find the references we needed for our final project, even on a busy afternoon. We really appreciated their patience and advice.</p>
                <p>One of the librarians showed us how to find earlier editions in the catalogue and helped us track down a book we had been searching for all week.</p>
            </dialog>
            <dialog className="db-dialog" id="db-details-00123" aria-labelledby="db-dialog-title-00123">
                <form method="dialog"><button className="db-icon-button" aria-label="Close details"><svg className="db-icon" aria-hidden="true"><use href="#db-i-close" /></svg></button></form>
                <span className="db-type db-suggestion"><svg className="db-icon" aria-hidden="true"><use href="#db-i-suggestion" /></svg>Suggestion</span> <span className="db-id">#00123</span>
                <h2 id="db-dialog-title-00123">More charging points in study spaces</h2>
                <time dateTime="2026-11-25T09:45:00+05:30"><svg className="db-icon" aria-hidden="true"><use href="#db-i-calendar" /></svg>25 Nov 2026, 9:45 AM</time>
                <p>A few extra power outlets around the shared study tables would make it easier to work on campus between lectures, especially during group projects.</p>
                <p>The tables along the library wall would be a good starting point. Several groups already use that space for laptop work throughout the day.</p>
            </dialog>
            <dialog className="db-dialog" id="db-details-forum" aria-labelledby="db-dialog-title-forum">
                <form method="dialog"><button className="db-icon-button" aria-label="Close details"><svg className="db-icon" aria-hidden="true"><use href="#db-i-close" /></svg></button></form>
                <span className="db-type"><svg className="db-icon" aria-hidden="true"><use href="#db-i-announcement" /></svg>Announcements</span>
                <h2 id="db-dialog-title-forum">Join the Student Voice Forum</h2>
                <time dateTime="2026-11-25T11:00:00+05:30"><svg className="db-icon" aria-hidden="true"><use href="#db-i-calendar" /></svg>25 Nov 2026, 11:00 AM</time>
                <p>Meet the student affairs team and share your ideas for a better campus experience.</p>
                <p>The forum takes place on 3 December at 2:00 PM in the main auditorium. Students from every programme are welcome to join the discussion.</p>
                <svg className="db-poster" viewBox="0 0 400 156" role="img" aria-label="Student Voice Forum poster"><use href="#db-poster" /></svg>
            </dialog>
            <dialog className="db-dialog" id="db-details-library" aria-labelledby="db-dialog-title-library">
                <form method="dialog"><button className="db-icon-button" aria-label="Close details"><svg className="db-icon" aria-hidden="true"><use href="#db-i-close" /></svg></button></form>
                <span className="db-type"><svg className="db-icon" aria-hidden="true"><use href="#db-i-notice" /></svg>Notices</span>
                <h2 id="db-dialog-title-library">Extended library hours</h2>
                <time dateTime="2026-11-24T16:30:00+05:30"><svg className="db-icon" aria-hidden="true"><use href="#db-i-calendar" /></svg>24 Nov 2026, 4:30 PM</time>
                <p>The campus library will stay open until 8:00 PM on weekdays during the assessment period.</p>
                <p>The extended schedule runs from 30 November through 11 December. Bring your student ID to use the reading rooms in the evening.</p>
            </dialog>
        </div>
    );
}
