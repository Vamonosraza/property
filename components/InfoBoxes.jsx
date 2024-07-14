    import React from "react";
    import Link from "next/link";
    import InfoBox from "./InfoBox"

    const InfoBoxes = () => {
    return (
        <section>
        <div className="container-xl lg:container m-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <InfoBox
                heading="Find Your Dream Home"
                backgroundColor="bg-gray-100"
                buttonInfo={{ text: "View Properties",
                            link: "/properties",
                            backgroundColor: "bg-black"}}
            >
                Find the perfect property that suits your needs.
            </InfoBox>

            <InfoBox
                heading="For Property Owners"
                backgroundColor="bg-blue-100"
                textColor="text-blue-800"
                buttonInfo={{ text: "Add Property",
                            link: "/properties/add",
                            backgroundColor: "bg-blue-500"}}
            >
                Find the perfect property that suits your needs.
            </InfoBox>
            
            </div>
        </div>
        </section>
    );
    };

    export default InfoBoxes;
