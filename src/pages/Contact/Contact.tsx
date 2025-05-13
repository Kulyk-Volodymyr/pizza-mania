"use client";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <main className={styles.main}>
      <div className={styles.main__inner}>
        <section className={styles.section}>
          <h1 className={styles.section__header}>Contact Us</h1>

          <div className={styles.section__info}>
            <p>Book online or give us a call on</p>
            <p>+91 1111 222 333</p>
            <p>Between 9:30 am - 10:00 pm</p>
          </div>

          <form action="" className={styles.form}>
            <fieldset className={styles.form__fieldset}>
              <label htmlFor="form-name" className={styles.form__label}>
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="form-name"
                className={styles.form__input}
              />

              <label htmlFor="form-email" className={styles.form__label}>
                E-Mail:
              </label>
              <input
                type="email"
                name="email"
                id="form-email"
                className={styles.form__input}
              />

              <label htmlFor="form-phone" className={styles.form__label}>
                Phone:
              </label>
              <input
                type="tel"
                name="phone"
                id="form-phone"
                className={styles.form__input}
              />

              <label htmlFor="form-message" className={styles.form__label}>
                Message:
              </label>
              <textarea
                name="message"
                id="form-message"
                className={styles.form__input}
                rows={4}
              ></textarea>
            </fieldset>
            <input
              type="button"
              value="Send Mail"
              className={styles.form__button}
            />
          </form>
        </section>
      </div>
    </main>
  );
}
