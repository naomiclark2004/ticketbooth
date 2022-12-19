import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-web';
function TermsPage({ navigation }) {

    const handle = () => {
        navigation.navigate('My Account', { screen: 'Setting' })
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Icon name="chevron-back" size={20} color="#A7A7A7" style={{ marginLeft: 10 }} onPress={handle} />
                <Text>Terms of Use</Text>
                <View style={styles.box}>
                    <Text>
                        Welcome! The following are the terms of use ("Terms") that govern your use of Ticket Booth mobile applications.<br></br><br></br>NOTICE REGARDING FUTURE CHANGES TO TERMS:<br></br><br></br>We may make changes to the Terms at any time. Any changes we make will be effective immediately when we post a revised version of the Terms on the Site. The "Last Updated” date above will tell you when the Terms were last revised. By continuing to use this Site after that date, you agree to the changes.
                        To the extent that these Terms differ from a prior version of the Terms which you previously agreed to, this version of the Terms supersedes and governs.<br></br><br></br>NOTICE REGARDING ARBITRATION AND CLASS ACTION WAIVER: <br></br><br></br>The Terms contain an arbitration agreement and class action waiver Section 17. Specifically, you and we agree that any dispute or claim relating in any way to the Terms, your use of the Site, or products or services sold, distributed, issued, or serviced by us or through us, will be resolved by binding, individual arbitration, rather than in court. By agreeing to individual arbitration, you and we each waive any right to participate in a class action lawsuit or class-wide arbitration. This agreement and waiver—along with some limited exceptions—is explained in Section 17, below.
                    </Text>
                    <Text>
                        <br></br><br></br>
                        1. Account Registration
                        <br></br><br></br>
                        You may browse the Site without registering for an account. You will be required to register for an account to use certain features of the Site, such as reserving or purchasing a ticket. Your account username may not include the name of another person with the intent to impersonate that person, or be offensive, vulgar, or obscene. Your account username and password are personal to you. You will be responsible for the confidentiality and use of your username and password, and for all activities (including purchases) that are conducted through your account. You may not transfer or sell access to your account. We will not be liable for any harm related to disclosure of your username or password or the use by anyone else of your username or password. You may not use another user’s account without that user’s permission. You will immediately notify us in writing if you discover any unauthorized use of your account or other account-related security breach. We may require you to change your username and/or password if we believe your account is no longer secure, or if we receive a complaint that your username violates someone else’s rights. You will have no ownership in your account or your username. We may refuse registration, cancel an account, or deny access to the Site for any reason.
                        You agree that you will comply with all applicable laws, rules and regulations, and that you will not:

                        Restrict or inhibit any other person from using the Site.

                        Use the Site for any unlawful purpose.

                        Express or imply that any statements you make are endorsed by us, without our prior written consent.

                        Impersonate any person or entity, whether actual or fictitious, including any employee or representative of our company.

                        Submit (a) any content or information that is unlawful, fraudulent, libelous, defamatory, or otherwise objectionable, or infringes our or any third party’s intellectual property or other rights; (b) any non-public information about companies without authorization; or (c) any advertisements, solicitations, chain letters, pyramid schemes, surveys, contests, investment opportunities, or other unsolicited commercial communication.

                        Submit, or provide links to, any postings containing material that could be considered harmful, obscene, pornographic, sexually explicit, indecent, lewd, violent, abusive, profane, insulting, threatening, harassing, hateful, or otherwise objectionable, including any posting that includes the image or likeness of individuals under 18 years of age, encourages or otherwise depicts or glamorizes drug use (including alcohol and cigarettes), characterizes violence as acceptable, glamorous, or desirable, or contains any personal contact information or other personal information identifying any third party.

                        Submit, or provide links to, any postings containing material that harasses, victimizes, degrades, or intimidates an individual or group of individuals on the basis of religion, race, ethnicity, sexual orientation, gender, age, or disability.

                        Engage in spamming or flooding.

                        Harvest or collect information about Site users.

                        Order, or attempt to order, a number of tickets for an event that exceeds the stated limit for that event.

                        Use any password or code to participate in a presale or other offer on the Site if you did not receive the password or code from us, or if you violate the terms of the presale or offer.
                    </Text>

                    <Text>
                        <br></br><br></br> Please review our Purchase Policy, which (in addition to the Terms) will govern your purchase of any tickets or other products through the Site, including any refunds or exchanges. We may impose conditions on your use of any coupon, promotional code, credit, or gift card. You will pay all charges incurred by you or any users of your account and credit card (or other applicable payment mechanism) at the price(s) in effect when such charges are incurred, including any applicable taxes. You may only use credit or debit cards, gift cards, or vouchers that belong to you or to people who expressly authorize you to use such payment methods. You may not attempt to conceal your identity by using multiple Internet Protocol addresses or email addresses, or by any other means, to conduct transactions on the Site.

                        You will not hold us liable if you do not comply with laws related to your transactions. We may provide law enforcement with information you provide to us related to your transactions to assist in any investigation or prosecution of you.

                        If we are unable to verify or authenticate any information or tickets you provide during any registration, ordering, purchase, ticket posting, sale, authentication, delivery, payment, or remittance process, or any other process, or if we are no longer able to verify or authorize your credit card or bank account information, your tickets may be cancelled, we may refuse to honor all pending and future ticket purchases made with those credit card or bank accounts and/or via any online accounts associated with those credit card or bank accounts. We may also prohibit you from using the Site.

                        You will not use ticket bot technology to search for, reserve, or purchase tickets through the Site; for the avoidance of doubt, this specifically prohibits you from using automated ticket purchasing software on the Site, and prohibits you from circumventing any security measure, access control system, or other technological control or measure on the Site that is used to enforce posted event ticket purchasing limits or to maintain the integrity of posted online ticket purchasing order rules.
                    </Text>

                    <Text>
                    <br></br><br></br>If you have any questions, comments, or complaints regarding the Terms or the Site, please contact us at:
                    <br></br><br></br>Ticket Booth, Inc.
                    <br></br>(802) 644-8250
                    <br></br>TicketBoothLegal@gmail.com
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
    },

    box: {
        display: 'flex',
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        marginTop: 20
    }



})

export default TermsPage;