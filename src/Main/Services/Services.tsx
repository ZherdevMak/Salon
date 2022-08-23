import React from 'react';
import stl from './Services.module.scss'
import photo4 from '../../Assets/images/photo-4.jpg'

const Services = () => {
    return (
        <section className={stl.Services}>
            <div className={stl.container}>
                <div className={stl.TextContainer}>
                    <h2 className={stl.Text}>OUR SERVICES</h2>
                </div>
                <div className={stl.SecondTextContainer}>
                    <h3 className={stl.SecondText}>SALON SERVICES</h3>
                </div>
                <div className={stl.imageContainer}>
                    <img className={stl.SalonServicesImage} src={photo4} alt="Beautiful hair"/>
                </div>
                <table className={stl.salonServicesTable}>
                    <thead>
                    <tr className={stl.tableHead}>
                        <th className={stl.tableHead1}>Offer</th>
                        <th className={stl.tableHead2}>Price</th>
                    </tr>
                    </thead>
                    <tbody className={stl.tableRow} >
                    <tr>
                        <td className={stl.tableDataOdd}>WOMEN’S WASH/ CUT/STYLE</td>
                        <td className={stl.tableDataOdd}>$55.00+</td>
                    </tr>
                    <tr>
                        <td className={stl.tableDataEven}>WOMEN’S CUT ONLY</td>
                        <td className={stl.tableDataEven}>$37.00+</td>
                    </tr>
                    <tr>
                        <td className={stl.tableDataOdd}>WOMEN WASH/STYLE</td>
                        <td className={stl.tableDataOdd}>$35.00+</td>
                    </tr>
                    <tr>
                        <td className={stl.tableDataEven}>MEN”S CUT/STYLE</td>
                        <td className={stl.tableDataEven}>$30.00+</td>
                    </tr>
                    <tr>
                        <td className={stl.tableDataOdd}>MENS COLOR/CUT/STYLE</td>
                        <td className={stl.tableDataOdd}>$75.00+</td>
                    </tr>
                    <tr>
                        <td className={stl.tableDataEven}>CHILDREN HAIRCUT UNDER 10</td>
                        <td className={stl.tableDataEven}>$25.00+</td>
                    </tr>
                    <tr>
                        <td className={stl.tableDataOdd}>WOMEN’S ROOT COLOUR</td>
                        <td className={stl.tableDataOdd}>$55.00+</td>
                    </tr>
                    <tr>
                        <td className={stl.tableDataEven}>WOMEN’S FULL COLOUR</td>
                        <td className={stl.tableDataEven}>$65.00+</td>
                    </tr>
                    <tr>
                        <td className={stl.tableDataOdd}>PARTIAL HILITES</td>
                        <td className={stl.tableDataOdd}>$65.00+</td>
                    </tr>
                    <tr>
                        <td className={stl.tableDataEven}>FOIL HILITES (1/2 HEAD)</td>
                        <td className={stl.tableDataEven}>$85.00+</td>
                    </tr>
                    <tr>
                        <td className={stl.tableDataOdd}>FOIL HILITES (FULL HEAD)</td>
                        <td className={stl.tableDataOdd}>$120.00+</td>
                    </tr>
                    <tr>
                        <td className={stl.tableDataEven}>BALAYAGE HILITES</td>
                        <td className={stl.tableDataEven}>$180.00+</td>
                    </tr>
                    <tr>
                        <td className={stl.tableDataOdd}>PERMS</td>
                        <td className={stl.tableDataOdd}>$100.00+</td>
                    </tr>
                    <tr>
                        <td className={stl.tableDataEven}>UPDO’S</td>
                        <td className={stl.tableDataEven}>$75.00+</td>
                    </tr>
                    <tr>
                        <td className={stl.tableDataOdd}>WELLA PLEX</td>
                        <td className={stl.tableDataOdd}>$25.00+</td>
                    </tr>
                    <tr>
                        <td className={stl.tableDataEven}>SCALP RENEW (NIOXIN)</td>
                        <td className={stl.tableDataEven}>$65.00+</td>
                    </tr>
                    <tr>
                        <td className={stl.tableDataOdd}>KERATIN SMOOTHING SYSTEM</td>
                        <td className={stl.tableDataOdd}>$270.00+</td>
                    </tr>
                    <tr>
                        <td className={stl.tableDataEven}>COLOUR CORRECTION</td>
                        <td className={stl.tableDataEven}>$100.00+</td>
                    </tr>
                    </tbody>
                </table>
                <p className={stl.priceText}>*Prices are subject to change</p>
                <p className={stl.extraText}>EXTRA CHARGE FOR LONG HAIR & BRIDAL PACKAGES AVAILABLE UPON REQUEST</p>
                <div className={stl.SecondTextContainer}>
                    <h3 className={stl.SecondText}>SPA SERVICES</h3>
                </div>
                <div className={stl.imageContainer}>
                    <img className={stl.SalonServicesImage} src={photo4} alt="Beautiful hair"/>
                </div>
                <table className={stl.salonServicesTable}>
                    <thead>
                    <tr className={stl.tableHead}>
                        <th className={stl.tableHead1}>Offer</th>
                        <th className={stl.tableHead2}>Price</th>
                    </tr>
                    </thead>
                    <tbody className={stl.tableRow} >
                    <tr>
                        <td className={stl.tableDataOdd}>WOMEN’S WASH/ CUT/STYLE</td>
                        <td className={stl.tableDataOdd}>$55.00+</td>
                    </tr>
                    <tr>
                        <td className={stl.tableDataEven}>WOMEN’S CUT ONLY</td>
                        <td className={stl.tableDataEven}>$37.00+</td>
                    </tr>
                    <tr>
                        <td className={stl.tableDataOdd}>WOMEN WASH/STYLE</td>
                        <td className={stl.tableDataOdd}>$35.00+</td>
                    </tr>
                    <tr>
                        <td className={stl.tableDataEven}>MEN”S CUT/STYLE</td>
                        <td className={stl.tableDataEven}>$30.00+</td>
                    </tr>
                    <tr>
                        <td className={stl.tableDataOdd}>MENS COLOR/CUT/STYLE</td>
                        <td className={stl.tableDataOdd}>$75.00+</td>
                    </tr>
                    <tr>
                        <td className={stl.tableDataEven}>CHILDREN HAIRCUT UNDER 10</td>
                        <td className={stl.tableDataEven}>$25.00+</td>
                    </tr>
                    <tr>
                        <td className={stl.tableDataOdd}>WOMEN’S ROOT COLOUR</td>
                        <td className={stl.tableDataOdd}>$55.00+</td>
                    </tr>
                    <tr>
                        <td className={stl.tableDataEven}>WOMEN’S FULL COLOUR</td>
                        <td className={stl.tableDataEven}>$65.00+</td>
                    </tr>
                    <tr>
                        <td className={stl.tableDataOdd}>PARTIAL HILITES</td>
                        <td className={stl.tableDataOdd}>$65.00+</td>
                    </tr>
                    <tr>
                        <td className={stl.tableDataEven}>FOIL HILITES (1/2 HEAD)</td>
                        <td className={stl.tableDataEven}>$85.00+</td>
                    </tr>
                    <tr>
                        <td className={stl.tableDataOdd}>FOIL HILITES (FULL HEAD)</td>
                        <td className={stl.tableDataOdd}>$120.00+</td>
                    </tr>
                    <tr>
                        <td className={stl.tableDataEven}>BALAYAGE HILITES</td>
                        <td className={stl.tableDataEven}>$180.00+</td>
                    </tr>
                    <tr>
                        <td className={stl.tableDataOdd}>PERMS</td>
                        <td className={stl.tableDataOdd}>$100.00+</td>
                    </tr>
                    <tr>
                        <td className={stl.tableDataEven}>UPDO’S</td>
                        <td className={stl.tableDataEven}>$75.00+</td>
                    </tr>
                    <tr>
                        <td className={stl.tableDataOdd}>WELLA PLEX</td>
                        <td className={stl.tableDataOdd}>$25.00+</td>
                    </tr>
                    <tr>
                        <td className={stl.tableDataEven}>SCALP RENEW (NIOXIN)</td>
                        <td className={stl.tableDataEven}>$65.00+</td>
                    </tr>
                    <tr>
                        <td className={stl.tableDataOdd}>KERATIN SMOOTHING SYSTEM</td>
                        <td className={stl.tableDataOdd}>$270.00+</td>
                    </tr>
                    <tr>
                        <td className={stl.tableDataEven}>COLOUR CORRECTION</td>
                        <td className={stl.tableDataEven}>$100.00+</td>
                    </tr>
                    </tbody>
                </table>

            </div>
        </section>
    );
};

export default Services;