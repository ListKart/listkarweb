'use client';

import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import styles from '../join.module.css';

export default function JoinPage() {
    const params = useParams();
    // We can also check search params if needed, but [code] handles the path content
    const code = params.code as string;
    const [message, setMessage] = useState('Attempting to open the shared list in your app...');
    const [showLoader, setShowLoader] = useState(true);
    const [deepLink, setDeepLink] = useState('#');

    useEffect(() => {
        if (code) {
            const link = `listkart://join/${code}`;
            setDeepLink(link);

            // Automatic redirect attempt
            const timer1 = setTimeout(() => {
                window.location.href = link;
            }, 500);

            // If the user stays here (meaning app didn't open), update UI
            const timer2 = setTimeout(() => {
                setShowLoader(false);
                setMessage("If the app didn't open automatically, you might need to install it first.");
            }, 3000);

            return () => {
                clearTimeout(timer1);
                clearTimeout(timer2);
            };
        } else {
            setMessage("Invalid or missing sharing code.");
            setShowLoader(false);
        }
    }, [code]);

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.logo}>
                    <span className={styles.list}>List</span>
                    <span className={styles.kart}>Kart</span>
                </div>
                <h1 className={styles.title}>Shared Shopping List</h1>
                <p className={styles.message}>{message}</p>

                <div id="actions">
                    {showLoader && <div className={styles.loader}></div>}

                    {code && (
                        <a href={deepLink} className={styles.btn}>
                            Open in ListKart
                        </a>
                    )}

                    <a href="https://play.google.com/store/apps/details?id=com.smartsupermarket.app" className={`${styles.btn} ${styles.btnSecondary}`}>
                        Download on Play Store
                    </a>
                </div>
            </div>

            <div className={styles.footer}>
                &copy; 2026 ListKart. All rights reserved.
            </div>
        </div>
    );
}
