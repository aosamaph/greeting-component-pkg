import * as React from 'react';
import styles from '../styles.module.less'


interface Props {
    text?: string;
}

class Greeting extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            // <div className={`${styles.centerize} ${styles.header}`}>
            <div className={[styles.centerize, styles.header].join(' ')}>
                Hello {this.props.text}
            </div>
        );
    }
}

export default Greeting;