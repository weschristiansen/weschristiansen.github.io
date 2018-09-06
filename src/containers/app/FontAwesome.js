import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { library } from '@fortawesome/fontawesome-svg-core';
import { PureComponent } from 'react';

library.add(
    faFacebookF,
    faGithub,
    faLinkedin,
    faTwitter,
);

export default class FontAwesome extends PureComponent {
    render() {
        return null;
    }
}
