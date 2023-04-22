import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w768-h432-p-no-v0"
    />
  </a>
);

// React Component
// functional component
const restrauntList = [
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "308385",
        name: "0612 ROAD CHEF ( Open Air )",
        uuid: "3403edad-b00d-4c44-8d58-106b1a724ded",
        city: "79",
        area: "Kidwaipuri",
        totalRatingsString: "10000+ ratings",
        cloudinaryImageId: "a6kxfsntpbcygshv5sgp",
        cuisines: ["Indian", "Chinese", "South Indian", "Biryani"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        slaString: "31 MINS",
        lastMileTravel: 4.300000190734863,
        slugs: {
          restaurant: "0612-road-chef-srikrishnapuri-srikrishnapuri",
          city: "patna",
        },
        cityState: "79",
        address: "Boring Road Behind Karlo showroom",
        locality: "Boring Canal Road",
        parentId: 22680,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "Flat ₹125 off",
          shortDescriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹199",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "₹125 OFF",
          shortDescriptionList: [
            {
              meta: "Use MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 2400,
              message: "",
            },
            {
              name: "time",
              fee: 2500,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 4900,
          message: "",
          title: "Delivery Charge",
          amount: "4900",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "4.3 kms",
        hasSurge: false,
        sla: {
          restaurantId: "308385",
          deliveryTime: 31,
          minDeliveryTime: 31,
          maxDeliveryTime: 31,
          lastMileTravel: 4.300000190734863,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.9",
        totalRatings: 10000,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "385479",
        name: "Bam Bam Sweets",
        uuid: "f4748873-6f13-40a4-a8c3-cb91f94df197",
        city: "79",
        area: "Kankarbagh",
        totalRatingsString: "50+ ratings",
        cloudinaryImageId: "jcoubphjhf5pokm3ebec",
        cuisines: ["Street Food", "Indian", "Desserts"],
        tags: [],
        costForTwo: 10000,
        costForTwoString: "₹100 FOR TWO",
        deliveryTime: 19,
        minDeliveryTime: 19,
        maxDeliveryTime: 19,
        slaString: "19 MINS",
        lastMileTravel: 1.100000023841858,
        slugs: {
          restaurant: "bam-bam-sweets-kankarbagh-kankarbagh",
          city: "patna",
        },
        cityState: "79",
        address:
          "Gali No 3 Chandmari Road Khasmahal Kankarbagh Near PNB ATM Patna, Patna Sadar, Patna Sadar, Patna, Bihar, 800020",
        locality: "Chandmari Road",
        parentId: 241712,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "20% off",
          shortDescriptionList: [
            {
              meta: "20% off | Use TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "20% off up to ₹50 | Use code TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "20% OFF",
          shortDescriptionList: [
            {
              meta: "Use TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "20% off up to ₹50 | Use code TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 2500,
              message: "",
            },
            {
              name: "time",
              fee: 2500,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 5000,
          message: "",
          title: "Delivery Charge",
          amount: "5000",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "1.1 kms",
        hasSurge: false,
        sla: {
          restaurantId: "385479",
          deliveryTime: 19,
          minDeliveryTime: 19,
          maxDeliveryTime: 19,
          lastMileTravel: 1.100000023841858,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.1",
        totalRatings: 50,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "392291",
        name: "Noshers",
        uuid: "0233509c-0f0e-4407-9581-d368b4302314",
        city: "79",
        area: "Kankarbagh",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "j3ks8yz9bkwbxfkcmqri",
        cuisines: ["Indian", "Chinese", "Biryani"],
        tags: [],
        costForTwo: 25000,
        costForTwoString: "₹250 FOR TWO",
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        slaString: "23 MINS",
        lastMileTravel: 3.5,
        slugs: {
          restaurant: "noshers-kankarbagh-kankarbagh",
          city: "patna",
        },
        cityState: "79",
        address:
          "7HF,HIG flats,vijay nagar rd,near, NBCC Tower, Part-2, HIG Colony, Vijay Nagar, Patna, Bihar 800026, India",
        locality: "vijay nagar Road",
        parentId: 342581,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "Flat ₹125 off",
          shortDescriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹199",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "₹125 OFF",
          shortDescriptionList: [
            {
              meta: "Use MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 1900,
              message: "",
            },
            {
              name: "time",
              fee: 2500,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 4400,
          message: "",
          title: "Delivery Charge",
          amount: "4400",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "3.5 kms",
        hasSurge: false,
        sla: {
          restaurantId: "392291",
          deliveryTime: 23,
          minDeliveryTime: 23,
          maxDeliveryTime: 23,
          lastMileTravel: 3.5,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.5",
        totalRatings: 1000,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "682863",
        name: "Khyati's Kitchen",
        uuid: "d015834a-2975-4d02-8128-ca81a01bc12c",
        city: "79",
        area: "Kankarbagh",
        totalRatingsString: "Too Few Ratings",
        cloudinaryImageId: "97ac64a29439854fbcc66f9482587c13",
        cuisines: ["Chinese", "Mughlai"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 27,
        minDeliveryTime: 27,
        maxDeliveryTime: 27,
        slaString: "27 MINS",
        lastMileTravel: 1.2999999523162842,
        slugs: {
          restaurant: "khyati's-kitchen-kankarbagh-kankarbagh",
          city: "patna",
        },
        cityState: "79",
        address:
          "Sanjay Nagar, Road No 10, Near New Bypass Road, Kankarbagh, Patna, Patna Sadar, Patna, , Bihar, 800020",
        locality: "Sanjay Nagar",
        parentId: 407630,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "Flat ₹125 off",
          shortDescriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹199",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "₹125 OFF",
          shortDescriptionList: [
            {
              meta: "Use MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 1900,
              message: "",
            },
            {
              name: "time",
              fee: 2500,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 4400,
          message: "",
          title: "Delivery Charge",
          amount: "4400",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "1.2 kms",
        hasSurge: false,
        sla: {
          restaurantId: "682863",
          deliveryTime: 27,
          minDeliveryTime: 27,
          maxDeliveryTime: 27,
          lastMileTravel: 1.2999999523162842,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "--",
        totalRatings: 0,
        new: true,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "328777",
        name: "Anupriya Dhaba",
        uuid: "803e4ae6-552f-4d79-98d0-bb7c291b1262",
        city: "79",
        area: "Fraser Road",
        totalRatingsString: "500+ ratings",
        cloudinaryImageId: "0e8256e8ee857290d64d27ee38729e60",
        cuisines: ["Indian"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        slaString: "23 MINS",
        lastMileTravel: 2.700000047683716,
        slugs: {
          restaurant: "govinda-dhaba-fraser-road-fraser-road",
          city: "patna",
        },
        cityState: "79",
        address: "Govinda dhaba Family, Fraser Road Area, Patna, Bihar, India",
        locality: "Budh Vihar",
        parentId: 89405,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "Flat ₹125 off",
          shortDescriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹199",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "₹125 OFF",
          shortDescriptionList: [
            {
              meta: "Use MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 1900,
              message: "",
            },
            {
              name: "time",
              fee: 2500,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 4400,
          message: "",
          title: "Delivery Charge",
          amount: "4400",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "2.7 kms",
        hasSurge: false,
        sla: {
          restaurantId: "328777",
          deliveryTime: 23,
          minDeliveryTime: 23,
          maxDeliveryTime: 23,
          lastMileTravel: 2.700000047683716,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.5",
        totalRatings: 500,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "579715",
        name: "GetAWay-Desserts",
        uuid: "70f675e3-1df5-475a-94f5-94d6fd78544e",
        city: "79",
        area: "Kankarbagh",
        totalRatingsString: "50+ ratings",
        cloudinaryImageId: "accc395ed9826ba73628d5e7bc872a4d",
        cuisines: ["Healthy Food", "Ice Cream", "Desserts", "Sweets"],
        tags: [],
        costForTwo: 15000,
        costForTwoString: "₹150 FOR TWO",
        deliveryTime: 20,
        minDeliveryTime: 20,
        maxDeliveryTime: 20,
        slaString: "20 MINS",
        lastMileTravel: 1.2000000476837158,
        slugs: {
          restaurant: "get-a-whey-healthy-ice-creams-ashok-nagar-kankarbagh",
          city: "patna",
        },
        cityState: "79",
        address:
          "Premises Nawab Heritage, Main Road, Ashok Nagar, Nauratanpur, Kankarbagh,Near Ram Krishna Dwarika College, Patna, Bihar, 800020",
        locality: "Ashok Nagar",
        parentId: 354819,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use SPECIALS",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 on select items | Use code SPECIALS",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use SPECIALS",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 on select items | Use code SPECIALS",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "time",
              fee: 2500,
              message: "",
            },
            {
              name: "distance",
              fee: 1900,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 4400,
          message: "",
          title: "Delivery Charge",
          amount: "4400",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "1.2 kms",
        hasSurge: false,
        sla: {
          restaurantId: "579715",
          deliveryTime: 20,
          minDeliveryTime: 20,
          maxDeliveryTime: 20,
          lastMileTravel: 1.2000000476837158,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.2",
        totalRatings: 50,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "475044",
        name: "Anu Pal Hotel",
        uuid: "000559ec-801b-40bd-a66c-079ae7284a36",
        city: "79",
        area: "Fraser Road",
        totalRatingsString: "100+ ratings",
        cloudinaryImageId: "ssgphjrb7x88b7awla9p",
        cuisines: [
          "North Indian",
          "Biryani",
          "Chinese",
          "Fast Food",
          "Tandoor",
          "Indian",
        ],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 24,
        minDeliveryTime: 24,
        maxDeliveryTime: 24,
        slaString: "24 MINS",
        lastMileTravel: 2.0999999046325684,
        slugs: {
          restaurant: "anupal-hotel-fraser-road-fraser-road-2",
          city: "patna",
        },
        cityState: "79",
        address: "46K, Goriyatoli, Station Road, Patna Sadar, Patna, Bihar",
        locality: "Station Road",
        parentId: 34467,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "20% off",
          shortDescriptionList: [
            {
              meta: "20% off | Use TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "20% off up to ₹50 | Use code TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "20% OFF",
          shortDescriptionList: [
            {
              meta: "Use TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "20% off up to ₹50 | Use code TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 1900,
              message: "",
            },
            {
              name: "time",
              fee: 2500,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 4400,
          message: "",
          title: "Delivery Charge",
          amount: "4400",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "2 kms",
        hasSurge: false,
        sla: {
          restaurantId: "475044",
          deliveryTime: 24,
          minDeliveryTime: 24,
          maxDeliveryTime: 24,
          lastMileTravel: 2.0999999046325684,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.4",
        totalRatings: 100,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "563331",
        name: "Moti Mahal Delux Tandoori Trail",
        uuid: "1a700696-9c4c-465f-a646-a9cb0ade0d96",
        city: "79",
        area: "Kankarbagh",
        totalRatingsString: "50+ ratings",
        cloudinaryImageId: "oduyvmzcesmdwlwoa65s",
        cuisines: ["Tandoor", "North Indian", "Chinese"],
        tags: [],
        costForTwo: 80000,
        costForTwoString: "₹800 FOR TWO",
        deliveryTime: 24,
        minDeliveryTime: 24,
        maxDeliveryTime: 24,
        slaString: "24 MINS",
        lastMileTravel: 1.2000000476837158,
        slugs: {
          restaurant: "moti-mahal-delux-tandoori-trail-kankarbagh-kankarbagh",
          city: "patna",
        },
        cityState: "79",
        address:
          "First FLOOR,S.S TOWER OPPOSITE IDBI BANK,NEAR PANCH SHIV TEMPLE LOHIYA NAGAR, Khasmahal, Kankarbagh, Patna, Bihar 800020, India",
        locality: "Lohiya Nagar",
        parentId: 387765,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "60% off",
          shortDescriptionList: [
            {
              meta: "60% off | Use TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹120 | Use code TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "60% OFF",
          shortDescriptionList: [
            {
              meta: "Use TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹120 | Use code TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 1900,
              message: "",
            },
            {
              name: "time",
              fee: 2500,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 4400,
          message: "",
          title: "Delivery Charge",
          amount: "4400",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "1.2 kms",
        hasSurge: false,
        sla: {
          restaurantId: "563331",
          deliveryTime: 24,
          minDeliveryTime: 24,
          maxDeliveryTime: 24,
          lastMileTravel: 1.2000000476837158,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.7",
        totalRatings: 50,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "151766",
        name: "Gangadhar Hotel- Pure Veg",
        uuid: "06de8240-1976-44e7-ba80-824c863b9ce0",
        city: "79",
        area: "Fraser Road",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "xtxdcbpidjlxpktgse9n",
        cuisines: ["North Indian"],
        tags: [],
        costForTwo: 15000,
        costForTwoString: "₹150 FOR TWO",
        deliveryTime: 24,
        minDeliveryTime: 24,
        maxDeliveryTime: 24,
        slaString: "24 MINS",
        lastMileTravel: 2.0999999046325684,
        slugs: {
          restaurant: "gangadhar-hotel-fraser-rd-fraser-road",
          city: "patna",
        },
        cityState: "79",
        address: "Laxmi Market,Near City centre , Patna",
        locality: "Laxmi Market",
        parentId: 86109,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 1900,
              message: "",
            },
            {
              name: "time",
              fee: 2500,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 4400,
          message: "",
          title: "Delivery Charge",
          amount: "4400",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "2 kms",
        hasSurge: false,
        sla: {
          restaurantId: "151766",
          deliveryTime: 24,
          minDeliveryTime: 24,
          maxDeliveryTime: 24,
          lastMileTravel: 2.0999999046325684,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "2.8",
        totalRatings: 1000,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "87390",
        name: "Darbaar",
        uuid: "8258d099-f8a0-4218-9ca2-52c162bded66",
        city: "79",
        area: "Fraser Road",
        totalRatingsString: "10000+ ratings",
        cloudinaryImageId: "tgtogvhpucvvxphqj9b7",
        cuisines: ["North Indian", "Biryani"],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 24,
        minDeliveryTime: 24,
        maxDeliveryTime: 24,
        slaString: "24 MINS",
        lastMileTravel: 3.5,
        slugs: {
          restaurant: "darbaar-fraser-road-fraser-road",
          city: "patna",
        },
        cityState: "79",
        address:
          "Ground Floor, Abdin House, Western Side of Fraser Road, Ward No.27, Patna Sadar, Patna, Bihar-800001",
        locality: "Lodhipur",
        parentId: 18724,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "Flat ₹125 off",
          shortDescriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹199",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "₹125 OFF",
          shortDescriptionList: [
            {
              meta: "Use MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 1900,
              message: "",
            },
            {
              name: "time",
              fee: 2500,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 4400,
          message: "",
          title: "Delivery Charge",
          amount: "4400",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "3.5 kms",
        hasSurge: false,
        sla: {
          restaurantId: "87390",
          deliveryTime: 24,
          minDeliveryTime: 24,
          maxDeliveryTime: 24,
          lastMileTravel: 3.5,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.8",
        totalRatings: 10000,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "463802",
        name: "Bhojan Raat Bhar",
        uuid: "4089413c-b7c8-4e0a-922d-66a7c4d89316",
        city: "79",
        area: "Fraser Road",
        totalRatingsString: "100+ ratings",
        cloudinaryImageId: "jq60nvr7sdo5ajeyas2l",
        cuisines: ["North Indian", "Chinese"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        slaString: "25 MINS",
        lastMileTravel: 2.0999999046325684,
        slugs: {
          restaurant: "bhojan-raat-bhar-fraser-road-fraser-road-2",
          city: "patna",
        },
        cityState: "79",
        address: "City Center ground floor,patna junction",
        locality: "City Center",
        parentId: 261965,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "20% off",
          shortDescriptionList: [
            {
              meta: "20% off | Use TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "20% off up to ₹50 | Use code TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "20% OFF",
          shortDescriptionList: [
            {
              meta: "Use TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "20% off up to ₹50 | Use code TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "time",
              fee: 2500,
              message: "",
            },
            {
              name: "distance",
              fee: 1900,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 4400,
          message: "",
          title: "Delivery Charge",
          amount: "4400",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "2 kms",
        hasSurge: false,
        sla: {
          restaurantId: "463802",
          deliveryTime: 25,
          minDeliveryTime: 25,
          maxDeliveryTime: 25,
          lastMileTravel: 2.0999999046325684,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.7",
        totalRatings: 100,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
];
const RestrauntCard = (props) => {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          props.restaurant.data.data?.cloudinaryImageId
        }
      />
      <h2>{props.restaurant.data.data?.name}</h2>
      <h3>{props.restaurant.data.data?.cuisines.join()}</h3>
      <h4>{props.restaurant.data.data?.lastMileTravel} minutes</h4>
    </div>
  );
};

const Body = () => {
  const restaurantCards = [];
  for (let i = 1; i <= 10; i++) {
    restaurantCards.push(<RestrauntCard restaurant={restrauntList[i]} />);
  }

  return (
    <div className="restrauant-list">
      {/* {restrauntList.map((restaurant) => (
        <RestrauntCard restaurant={restaurant} key={restaurant.data.data.id} />
      ))} */}

      {restaurantCards}

      {/* <RestrauntCard restaurant={restrauntList[1]} />
      <RestrauntCard restaurant={restrauntList[2]} />
      <RestrauntCard restaurant={restrauntList[3]} />
      <RestrauntCard restaurant={restrauntList[4]} />
      <RestrauntCard restaurant={restrauntList[5]} />
      <RestrauntCard restaurant={restrauntList[6]} />
      <RestrauntCard restaurant={restrauntList[7]} />
      <RestrauntCard restaurant={restrauntList[8]} />
      <RestrauntCard restaurant={restrauntList[9]} />
      <RestrauntCard restaurant={restrauntList[10]} /> */}
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
