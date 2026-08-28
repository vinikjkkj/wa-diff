__d(
  "SignalsPropDescriptors",
  [
    "fbt",
    "AdsTargetingAudienceEditorGKSelectors",
    "WhatsAppHSMLimitsConfig.experimental",
    "isAccountEligibleForMessengerMarketingMessages",
    "isTruthy",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = function () {
        return s._(
          /*BTDS*/ "Phone numbers must include a country code to be used for matching, even if they're all from the same country. For example, a one must precede a phone number in the United States. We accept phone numbers in {boldColumns}, with or without punctuation. {paragraphBreak}{boldImportant}{break} Make sure that you include the country code as part of your customer's phone number, even if all of your data is from the same country.",
          [
            s._param(
              "boldColumns",
              u.jsx("b", {
                children: s._(/*BTDS*/ "up to three separate columns"),
              }),
            ),
            s._param("paragraphBreak", u.jsx("p", {})),
            s._param(
              "boldImportant",
              u.jsx("b", { children: s._(/*BTDS*/ "Important") }),
            ),
            s._param("break", u.jsx("br", {})),
          ],
        );
      },
      d = function () {
        return s._(
          /*BTDS*/ "Phone numbers must include a country code to be used for matching, even if they're all from the same country. For example, a one must precede a phone number in the United States. We accept phone numbers in {boldColumns}, with or without punctuation. {paragraphBreak}{boldHeader}{break} Required to upload people to your messaging customer base.",
          [
            s._param(
              "boldColumns",
              u.jsx("b", {
                children: s._(/*BTDS*/ "up to three separate columns"),
              }),
            ),
            s._param("paragraphBreak", u.jsx("p", {})),
            s._param(
              "boldHeader",
              u.jsx("b", { children: s._(/*BTDS*/ "How to use this column:") }),
            ),
            s._param("break", u.jsx("br", {})),
          ],
        );
      },
      m = [
        s._(/*BTDS*/ "AECE52E7-03EE-455A-B3C4-E57283966239"),
        s._(/*BTDS*/ "BEBE52E7-03EE-455A-B3C4-E57283966239"),
      ],
      p = function () {
        return s._(
          /*BTDS*/ "We accept email addresses in {boldColumns} . Only one email can go in each cell. All universal email formats are accepted. {paragraphBreak}{boldHeader}{break} Email or phone number is required to upload people to your subscribers.",
          [
            s._param(
              "boldColumns",
              u.jsx("b", {
                children: s._(/*BTDS*/ "up to three separate columns"),
              }),
            ),
            s._param("paragraphBreak", u.jsx("p", {})),
            s._param(
              "boldHeader",
              u.jsx("b", { children: s._(/*BTDS*/ "How to use this column:") }),
            ),
            s._param("break", u.jsx("br", {})),
          ],
        );
      },
      _ = function () {
        return o(
          "isAccountEligibleForMessengerMarketingMessages",
        ).isAccountEligibleForMessengerMarketingMessages()
          ? s._(
              /*BTDS*/ "We accept email addresses in up to three separate columns. Only one email can go in each cell. All universal email formats are accepted. {paragraphBreak}{boldHeader}{break} Email or phone number is required to upload people to your messaging customer base.",
              [
                s._param("paragraphBreak", u.jsx("p", {})),
                s._param(
                  "boldHeader",
                  u.jsx("b", {
                    children: s._(/*BTDS*/ "How to use this column:"),
                  }),
                ),
                s._param("break", u.jsx("br", {})),
              ],
            )
          : s._(
              /*BTDS*/ "We accept email addresses in up to three separate columns. Only one email can go in each cell. All universal email formats are accepted.",
            );
      },
      f = function () {
        return s._(/*BTDS*/ "We accept full names of towns and cities.");
      },
      g = function () {
        return s._(
          /*BTDS*/ "Use \u201cyes\u201d to also upload someone to your messaging customer base. Leave blank for people who are not subscribed to marketing messages. If someone has been added to your customer base from a previous list, a blank value will not unsubscribe them. {paragraphBreak}{boldHeader}{break} Required to upload people to your customer base.",
          [
            s._param("paragraphBreak", u.jsx("p", {})),
            s._param(
              "boldHeader",
              u.jsx("b", { children: s._(/*BTDS*/ "How to use this column:") }),
            ),
            s._param("break", u.jsx("br", {})),
          ],
        );
      };
    function h() {
      return s._(
        /*BTDS*/ "Provide each customer with a unique code. We accept all types of characters.",
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      return s._(
        /*BTDS*/ "Customize the destination for each customer when they click a link in your message. We accept all types of characters.",
      );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      return s._(
        /*BTDS*/ "Add data for each customer. We accept all types of characters. {paragraphBreak}{boldImportant}{break} Do not include personally identifiable information about customers, such as email addresses, in custom fields.",
        [
          s._param("paragraphBreak", u.jsx("p", {})),
          s._param(
            "boldImportant",
            u.jsx("b", { children: s._(/*BTDS*/ "Important") }),
          ),
          s._param("break", u.jsx("br", {})),
        ],
      );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    var b = {
        add_to_messaging_customer_base_for_messenger: {
          description: g(),
          label: s._(/*BTDS*/ "Add to messaging customer base for Messenger"),
        },
        add_to_messaging_customer_base_for_whatsapp: {
          description: g(),
          label: s._(/*BTDS*/ "Add to messaging customer base for WhatsApp"),
        },
        address: {
          description: s._(
            /*BTDS*/ "A street address should provide only the building number, room or apartment number, and street name of the address. It can include numbers, spaces, and text.",
          ),
          label: s._(/*BTDS*/ "Street Address"),
        },
        age: {
          description: s._(/*BTDS*/ "We accept age as a numerical value."),
          label: s._(/*BTDS*/ "Age"),
        },
        appuid: {
          description: s._(
            /*BTDS*/ "An ID corresponding to someone who uses an app that can be retrieved through the Facebook SDK. We accept numerical user IDs associated with your Facebook application.",
          ),
          label: s._(/*BTDS*/ "Facebook App User ID"),
        },
        c1_plain: { description: C(), label: s._(/*BTDS*/ "Custom 1") },
        c2_plain: { description: C(), label: s._(/*BTDS*/ "Custom 2") },
        c3_plain: { description: C(), label: s._(/*BTDS*/ "Custom 3") },
        c4_plain: { description: C(), label: s._(/*BTDS*/ "Custom 4") },
        c5_plain: { description: C(), label: s._(/*BTDS*/ "Custom 5") },
        country: {
          description: s._(
            /*BTDS*/ "Countries must be provided as an ISO two-letter country code, even if they're all from the same country. Because we match on a global scale, this simple step helps us match as many people as possible from your list.",
          ),
          label: s._(/*BTDS*/ "Country"),
          subscriberListDescription: s._(
            /*BTDS*/ "Countries must be provided as an ISO two-letter country code, even if they're all from the same country.",
          ),
        },
        ct: {
          description: f(),
          examples: [
            s._(/*BTDS*/ "Menlo Park"),
            s._(/*BTDS*/ "Seattle"),
            s._(/*BTDS*/ "London"),
          ],
          label: s._(/*BTDS*/ "City"),
        },
        currency: {
          description: s._(
            /*BTDS*/ "We support standard 3-letter ISO currency codes.",
          ),
          label: s._(/*BTDS*/ "Currency"),
        },
        custom_data: {
          description: s._(
            /*BTDS*/ "You can send arbitrary data to Meta, and use that to create custom audiences and custom conversions.",
          ),
          label: s._(/*BTDS*/ "Add Custom Type"),
        },
        data_processing_options: {
          description: s._(
            /*BTDS*/ "How you want your events to be processed. An empty array indicates an event shouldn\u2019t be processed with Limited Data Use restrictions. Learn more about Data Processing Options in the settings tab.",
          ),
          label: s._(/*BTDS*/ "Data Processing Options"),
        },
        data_processing_options_country: {
          description: s._(
            /*BTDS*/ "The country you want associated with an event\u2019s Data Processing Options. Learn more about Data Processing Options in the settings tab.",
          ),
          label: s._(/*BTDS*/ "Data Processing Options Country"),
        },
        data_processing_options_state: {
          description: s._(
            /*BTDS*/ "The state or region you want associated with an event\u2019s Data Processing Options. Learn more about Data Processing Options in the settings tab.",
          ),
          label: s._(/*BTDS*/ "Data Processing Options State"),
        },
        dob: {
          description: s._(
            /*BTDS*/ "We accept 18 different date formats to accommodate a range of month, day and year combinations, with or without punctuation.",
          ),
          label: s._(/*BTDS*/ "Date of birth"),
        },
        dob_plain: {
          description: s._(
            /*BTDS*/ "Include the date of birth for each customer. We accept all types of formats.",
          ),
          label: s._(/*BTDS*/ "Date of birth"),
        },
        doby: {
          description: s._(
            /*BTDS*/ "We accept year of birth as a 4-digit number, YYYY.",
          ),
          label: s._(/*BTDS*/ "Year of Birth"),
        },
        email: { description: _(), label: s._(/*BTDS*/ "Email") },
        email_plain: { description: p(), label: s._(/*BTDS*/ "Email") },
        event_name: {
          description: s._(/*BTDS*/ "We support various event names:"),
          label: s._(/*BTDS*/ "Event Name"),
        },
        event_time: {
          description: s._(
            /*BTDS*/ "The time the event occurred. We support events that occurred up to 90 days in the past. We encourage uploading within 48 hours of the event occurring to enable offline optimization. We recommend using timestamps that are accurate to the minute or second.",
          ),
          label: s._(/*BTDS*/ "Event Time"),
        },
        extern_id: {
          description: s._(
            /*BTDS*/ "Third-party user ID. It will not be hashed.",
          ),
          label: s._(/*BTDS*/ "Extern ID"),
        },
        externalid: {
          description: s._(
            /*BTDS*/ "An external ID can be any customer number or other identifier you use to manage customer information. It can include numbers and text.",
          ),
          label: s._(/*BTDS*/ "External ID"),
        },
        fbc: {
          description: s._(
            /*BTDS*/ "The fbc parameter contains the Facebook Click ID. It is not hashed. Format: {fbc format}",
            [
              s._param(
                "fbc format",
                "fb.{subdomain_index}.{creation_time}.{fbclid}",
              ),
            ],
          ),
          examples: [
            s._(
              /*BTDS*/ "fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890",
            ),
          ],
          label: s._(/*BTDS*/ "fbc"),
        },
        fi: { label: s._(/*BTDS*/ "First name initial") },
        fn: {
          description: s._(
            /*BTDS*/ "We accept first name and first name initial, with or without accents. Initials can be provided with or without a period.",
          ),
          label: s._(/*BTDS*/ "First name"),
        },
        fn_plain: {
          description: s._(
            /*BTDS*/ "Include a first name for each customer. We accept first name and first name initial, with or without accents.",
          ),
          label: s._(/*BTDS*/ "First name"),
        },
        gen: {
          description: s._(
            /*BTDS*/ "We accept gender in the form of an initial, such as F for female and M for male.",
          ),
          label: s._(/*BTDS*/ "Gender"),
        },
        iguid: {
          description: s._(
            /*BTDS*/ "An ID corresponding to someone who has interacted with your business's Instagram Page. This does not refer to a user's personal Instagram profile page. We accept numerical user IDs associated with your business's Instagram Page.",
          ),
          label: s._(/*BTDS*/ "Instagram Scoped User ID"),
        },
        item_number: { label: s._(/*BTDS*/ "Item Number") },
        lang: {
          label: s._(/*BTDS*/ "Language"),
          subscriberListDescription: s._(
            /*BTDS*/ "We accept full names of any language.",
          ),
        },
        lead_id: {
          description: s._(
            /*BTDS*/ 'Lead IDs should be numbers, and may be prefixed with "l:" (lowercase L and colon).',
          ),
          label: s._(/*BTDS*/ "Lead ID"),
        },
        ln: {
          description: s._(
            /*BTDS*/ "We accept full last names with or without accents.",
          ),
          label: s._(/*BTDS*/ "Last Name"),
        },
        ln_plain: {
          description: s._(
            /*BTDS*/ "Include a last name for each customer. We accept full surnames with or without accents.",
          ),
          label: s._(/*BTDS*/ "Last name"),
        },
        lookalike_value: { label: s._(/*BTDS*/ "Customer Value") },
        madid: {
          description: s._(
            /*BTDS*/ "We accept 2 types of mobile advertiser IDs: Android's Advertising ID (AAID), which Google provides as part of Android advertising, and Apple's Advertising Identifier (IDFA), which Apple provides as part of iOS in its ads framework.",
          ),
          formats: m,
          label: s._(/*BTDS*/ "Mobile Advertiser ID"),
        },
        offercode: {
          description: s._(
            /*BTDS*/ "Offer codes must be {offer code maximum length} characters or less. You can only use alphanumeric characters A-Z, a-z, 0-9. We will save offer codes for a subscriber from all subscriber lists that contain a code for that subscriber. Offer codes from the subscriber list won't be sent in the message unless you select the option to use personalized offer codes during message creation.",
            [
              s._param(
                "offer code maximum length",
                r("WhatsAppHSMLimitsConfig.experimental").coupon_code_limit,
              ),
            ],
          ),
          label: s._(/*BTDS*/ "Offer code"),
          subscriberListDescription: s._(
            /*BTDS*/ "Offer codes must be {offer code maximum length} characters or less. You can only use alphanumeric characters A-Z, a-z, 0-9. We will save offer codes for a subscriber from all subscriber lists that contain a code for that subscriber. Offer codes from the subscriber list won't be sent in the message unless you select the option to use personalized offer codes during message creation.",
            [
              s._param(
                "offer code maximum length",
                r("WhatsAppHSMLimitsConfig.experimental").coupon_code_limit,
              ),
            ],
          ),
        },
        order_id: { label: s._(/*BTDS*/ "Order ID") },
        pageuid: {
          description: s._(
            /*BTDS*/ "An ID corresponding to someone who has interacted with your business's Facebook Page. This does not refer to a user's personal Facebook profile page. We accept numerical user IDs associated with your business's Facebook Page.",
          ),
          label: s._(/*BTDS*/ "Facebook Page User ID"),
        },
        pc1_plain: { description: h(), label: s._(/*BTDS*/ "Promo code 1") },
        pc2_plain: { description: h(), label: s._(/*BTDS*/ "Promo code 2") },
        pc3_plain: { description: h(), label: s._(/*BTDS*/ "Promo code 3") },
        phone: {
          description: o(
            "isAccountEligibleForMessengerMarketingMessages",
          ).isAccountEligibleForMessengerMarketingMessages()
            ? s._(
                /*BTDS*/ "Phone numbers must include a country code for matching, even if all numbers are from the same country. For example, a 1 must precede a phone number in the United States. You can provide phone numbers in up to three separate columns, with or without punctuation. This identifier is required to upload people to your messaging customer base. {paragraphBreak}{boldHeader}{break} Email or phone number is required to upload people to your messaging customer base.",
                [
                  s._param("paragraphBreak", u.jsx("p", {})),
                  s._param(
                    "boldHeader",
                    u.jsx("b", {
                      children: s._(/*BTDS*/ "How to use this column:"),
                    }),
                  ),
                  s._param("break", u.jsx("br", {})),
                ],
              )
            : o(
                  "AdsTargetingAudienceEditorGKSelectors",
                ).passWASingleCAForAdsMMGK()
              ? d()
              : c(),
          label: s._(/*BTDS*/ "Phone number"),
          subscriberListDescription: s._(
            /*BTDS*/ "Phone numbers must include a country code, even if they're all from the same country. For example, a one must precede a phone number in the United States.",
          ),
        },
        phone_plain: {
          description: s._(
            /*BTDS*/ "Phone numbers must include a country code, even if they're all from the same country. For example, a one must precede a phone number in the United States. We accept phone numbers in {boldColumns} , with or without punctuation. {paragraphBreak}{boldHeader}{break} Make sure that you include the country code as part of your customers' phone numbers, even if all of your data is from the same country.",
            [
              s._param(
                "boldColumns",
                u.jsx("b", {
                  children: s._(/*BTDS*/ "up to three separate columns"),
                }),
              ),
              s._param("paragraphBreak", u.jsx("p", {})),
              s._param(
                "boldHeader",
                u.jsx("b", { children: s._(/*BTDS*/ "Important") }),
              ),
              s._param("break", u.jsx("br", {})),
            ],
          ),
          label: s._(/*BTDS*/ "Phone number"),
        },
        st: {
          description: s._(
            /*BTDS*/ "We accept full names of US and international states and provinces, as well as the abbreviated versions of US states.",
          ),
          label: s._(/*BTDS*/ "State\/Province"),
        },
        url1_plain: { description: y(), label: s._(/*BTDS*/ "URL suffix 1") },
        url2_plain: { description: y(), label: s._(/*BTDS*/ "URL suffix 2") },
        url3_plain: { description: y(), label: s._(/*BTDS*/ "URL suffix 3") },
        value: {
          description: s._(
            /*BTDS*/ "The Value field must contain a decimal number greater than or equal to zero. It can't include letters, special characters, currency symbols or commas.",
          ),
          label: s._(/*BTDS*/ "Value"),
        },
        zip: {
          description: s._(
            /*BTDS*/ "We accept US and international ZIP and postal codes. US ZIP codes may include a 4-digit extension as long as they are separated by a hyphen. The extension is not required and will not further improve match rate.",
          ),
          label: s._(/*BTDS*/ "ZIP\/Postal Code"),
          subscriberListDescription: s._(
            /*BTDS*/ "We accept US and international ZIP and postal codes. US ZIP codes may include a 4-digit extension as long as they are separated by a hyphen.",
          ),
        },
      },
      v = function () {
        return s._(
          /*BTDS*/ 'Use "LDU" to enable Limited Data Use for California based customers. Use no value for customers who haven\'t asked you to limit their data use.',
        );
      },
      S = babelHelpers.extends({}, b, {
        data_processing_options: {
          description: v(),
          label: s._(/*BTDS*/ "Data processing options"),
        },
        data_processing_options_country: {
          description: s._(
            /*BTDS*/ "Use '1' for customers in the United States. Use '0' or no value for customers outside of the US (or if you don't know where they are). Our system will check their location.",
          ),
          label: s._(/*BTDS*/ "Data processing options - Country"),
        },
        data_processing_options_state: {
          description: s._(
            /*BTDS*/ "Use '1000' for customers in California. Use '0' or no value for customers who aren't in California (or if you don't know where they are). Our system will check their location.",
          ),
          label: s._(/*BTDS*/ "Data processing options - State"),
        },
      });
    function R(e, t, n) {
      var r = I(n)[e.key];
      return (
        (t && r.subscriberListDescription) ||
        (r && r.description) ||
        e.description
      );
    }
    function L(e, t) {
      var n = I(t)[e.key];
      return (n && n.label) || e.label || e.key;
    }
    function E(e, t) {
      var n = I(t)[e.key],
        r = (n && n.formats) || e.formats,
        o = (n && n.examples) || e.examples;
      return r || o;
    }
    function k(e, t) {
      var n = I(e)[t].label;
      return n;
    }
    function I(e) {
      return r("isTruthy")(e) ? S : b;
    }
    ((l.getPropDescription = R),
      (l.getPropLabel = L),
      (l.getPropFormatsOrExamples = E),
      (l.getPropLabelFromKey = k));
  },
  226,
);
