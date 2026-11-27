exports.createSchemaCustomization = ({ actions }) => {
    if (process.env.LOCAL_HOMEPAGE_RESEARCH !== 'true') return;

    actions.createTypes(`
        type StrapiCfdWarningBanner implements Node @dontInfer {
            loss_percent: Float
        }

        type PreviewFile {
            publicURL: String
            url: String
        }

        type PreviewImage {
            url: String
            localFile: PreviewFile
        }

        type PreviewContent {
            header: String
            sub_header: String
            first_paragraph: String
            second_paragraph: String
            third_paragraph: String
            hero_image: PreviewImage
            bg_desktop: PreviewImage
            bg_mobile: PreviewImage
            bg_desktop_rtl: PreviewImage
            bg_mobile_rtl: PreviewImage
            image: PreviewImage
            photo: PreviewImage
            earth: PreviewImage
            earth_mobile: PreviewImage
            name: String
            role: String
            description: String
            number: String
            link_name: String
            link_url: String
            link_title: String
            item_name: String
            alt_image: String
            button_type: String
            live_chat_title: String
            country_city: String
            continent: String
            country_name: String
            city_name: String
            address: String
            map_url: String
            map_image: PreviewImage
            country_icon: PreviewImage
            values: [PreviewContent]
            principles: [PreviewContent]
            leaders: [PreviewContent]
            numbers: [PreviewContent]
            locations: [PreviewContent]
            country: [PreviewContent]
            button: PreviewContent
            slider_1: PreviewImage
            slider_2: PreviewImage
            slider_3: PreviewImage
            slider_4: PreviewImage
            slider_5: PreviewImage
            slider_6: PreviewImage
        }

        type StrapiWhoWeArePage implements Node @dontInfer {
            hero: PreviewContent
            our_values: PreviewContent
            our_principles: PreviewContent
            our_leadership: PreviewContent
            deriv_in_numbers: PreviewContent
            our_locations: PreviewContent
            banner: PreviewContent
            slider_medias: PreviewContent
        }

        type StrapiContactUs implements Node @dontInfer {
            hero: PreviewContent
            support_section: [PreviewContent]
            our_offices: String
            office_address: [PreviewContent]
            business_partnership: PreviewContent
        }
    `)
}
