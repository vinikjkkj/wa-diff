__d(
  "WAWebProductCollectionCollectionsRejectTranslations.react",
  [
    "fbt",
    "WAWebClickableLink.react",
    "WAWebConstantsDeprecated",
    "WAWebExternalLink.react",
    "WAWebNonEmptyString",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e, t) {
      var n,
        a =
          (n = o("WAWebNonEmptyString").asMaybeNonEmptyString(t)) != null
            ? n
            : r("WAWebConstantsDeprecated").WA_COMMERCE_POLICY_URL;
      return u.jsx(r("WAWebClickableLink.react"), {
        href: a,
        onClick: function (t) {
          (t.preventDefault(),
            o("WAWebExternalLink.react").openExternalLink(a));
        },
        children: e,
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e, t) {
      var n;
      switch (e) {
        case "drugs":
          return (
            (n = s._(
              /*BTDS*/ "WhatsApp's Commerce Policy for prescription, recreational, or other types of Drugs",
            )),
            {
              first: s._(
                /*BTDS*/ "This collection wasn't approved because its name violates {collections_rejected_policy_drugs}",
                [s._param("collections_rejected_policy_drugs", c(n, t))],
              ),
              second: s._(
                /*BTDS*/ "We reviewed this collection again and confirmed its name violates {collections_rejected_policy_drugs}.",
                [s._param("collections_rejected_policy_drugs", c(n, t))],
              ),
            }
          );
        case "weapons":
          return (
            (n = s._(
              /*BTDS*/ "WhatsApp's Commerce Policy for Weapons, ammunition, or explosives",
            )),
            {
              first: s._(
                /*BTDS*/ "This collection wasn't approved because its name violates {collections_rejected_policy_weapons}",
                [s._param("collections_rejected_policy_weapons", c(n, t))],
              ),
              second: s._(
                /*BTDS*/ "We reviewed this collection again and confirmed its name violates {collections_rejected_policy_weapons}.",
                [s._param("collections_rejected_policy_weapons", c(n, t))],
              ),
            }
          );
        case "animals":
          return (
            (n = s._(/*BTDS*/ "WhatsApp's Commerce Policy for Animals")),
            {
              first: s._(
                /*BTDS*/ "This collection wasn't approved because its name violates {collections_rejected_policy_animals}",
                [s._param("collections_rejected_policy_animals", c(n, t))],
              ),
              second: s._(
                /*BTDS*/ "We reviewed this collection again and confirmed its name violates {collections_rejected_policy_animals}.",
                [s._param("collections_rejected_policy_animals", c(n, t))],
              ),
            }
          );
        case "alcohol":
          return (
            (n = s._(/*BTDS*/ "WhatsApp's Commerce Policy for Alcohol")),
            {
              first: s._(
                /*BTDS*/ "This collection wasn't approved because its name violates {collections_rejected_policy_alcohol}",
                [s._param("collections_rejected_policy_alcohol", c(n, t))],
              ),
              second: s._(
                /*BTDS*/ "We reviewed this collection again and confirmed its name violates {collections_rejected_policy_alcohol}.",
                [s._param("collections_rejected_policy_alcohol", c(n, t))],
              ),
            }
          );
        case "gambling":
          return (
            (n = s._(
              /*BTDS*/ "WhatsApp's Commerce Policy for Real money gambling services",
            )),
            {
              first: s._(
                /*BTDS*/ "This collection wasn't approved because its name violates {collections_rejected_policy_gambling}",
                [s._param("collections_rejected_policy_gambling", c(n, t))],
              ),
              second: s._(
                /*BTDS*/ "We reviewed this collection again and confirmed its name violates {collections_rejected_policy_gambling}.",
                [s._param("collections_rejected_policy_gambling", c(n, t))],
              ),
            }
          );
        case "tobacco":
          return (
            (n = s._(
              /*BTDS*/ "WhatsApp's Commerce Policy for Tobacco items and related paraphernalia",
            )),
            {
              first: s._(
                /*BTDS*/ "This collection wasn't approved because its name violates {collections_rejected_policy_tobacco}",
                [s._param("collections_rejected_policy_tobacco", c(n, t))],
              ),
              second: s._(
                /*BTDS*/ "We reviewed this collection again and confirmed its name violates {collections_rejected_policy_tobacco}.",
                [s._param("collections_rejected_policy_tobacco", c(n, t))],
              ),
            }
          );
        case "overtly_sexualized_positioning":
          return (
            (n = s._(
              /*BTDS*/ "WhatsApp's Commerce Policy for Overtly sexualized positioning",
            )),
            {
              first: s._(
                /*BTDS*/ "This collection wasn't approved because its name violates {collections_rejected_policy_overtly_sexualized_positioning}",
                [
                  s._param(
                    "collections_rejected_policy_overtly_sexualized_positioning",
                    c(n, t),
                  ),
                ],
              ),
              second: s._(
                /*BTDS*/ "We reviewed this collection again and confirmed its name violates {collections_rejected_policy_overtly_sexualized_positioning}.",
                [
                  s._param(
                    "collections_rejected_policy_overtly_sexualized_positioning",
                    c(n, t),
                  ),
                ],
              ),
            }
          );
        case "adult":
          return (
            (n = s._(
              /*BTDS*/ "WhatsApp's Commerce Policy for Adult products or service",
            )),
            {
              first: s._(
                /*BTDS*/ "This collection wasn't approved because its name violates {collections_rejected_policy_adult}",
                [s._param("collections_rejected_policy_adult", c(n, t))],
              ),
              second: s._(
                /*BTDS*/ "We reviewed this collection again and confirmed its name violates {collections_rejected_policy_adult}.",
                [s._param("collections_rejected_policy_adult", c(n, t))],
              ),
            }
          );
        case "supplements":
          return (
            (n = s._(
              /*BTDS*/ "WhatsApp's Commerce Policy for Unsafe ingestible supplements",
            )),
            {
              first: s._(
                /*BTDS*/ "This collection wasn't approved because its name violates {collections_rejected_policy_supplements}",
                [s._param("collections_rejected_policy_supplements", c(n, t))],
              ),
              second: s._(
                /*BTDS*/ "We reviewed this collection again and confirmed its name violates {collections_rejected_policy_supplements}.",
                [s._param("collections_rejected_policy_supplements", c(n, t))],
              ),
            }
          );
        case "body_parts_fluids":
          return (
            (n = s._(
              /*BTDS*/ "WhatsApp's Commerce Policy for Body parts and fluids",
            )),
            {
              first: s._(
                /*BTDS*/ "This collection wasn't approved because its name violates {collections_rejected_policy_body_parts_fluids}",
                [
                  s._param(
                    "collections_rejected_policy_body_parts_fluids",
                    c(n, t),
                  ),
                ],
              ),
              second: s._(
                /*BTDS*/ "We reviewed this collection again and confirmed its name violates {collections_rejected_policy_body_parts_fluids}.",
                [
                  s._param(
                    "collections_rejected_policy_body_parts_fluids",
                    c(n, t),
                  ),
                ],
              ),
            }
          );
        case "healthcare":
          return (
            (n = s._(
              /*BTDS*/ "WhatsApp's Commerce Policy for Medical and healthcare products",
            )),
            {
              first: s._(
                /*BTDS*/ "This collection wasn't approved because its name violates {collections_rejected_policy_healthcare}",
                [s._param("collections_rejected_policy_healthcare", c(n, t))],
              ),
              second: s._(
                /*BTDS*/ "We reviewed this collection again and confirmed its name violates {collections_rejected_policy_healthcare}.",
                [s._param("collections_rejected_policy_healthcare", c(n, t))],
              ),
            }
          );
        case "misleading":
          return (
            (n = s._(
              /*BTDS*/ "WhatsApp's Commerce Policy for Business models, goods, items, or services that may be or are fraudulent, misleading, offensive, or deceptive, or may be or are exploitative, inappropriate, or exert undue pressure on targeted groups",
            )),
            {
              first: s._(
                /*BTDS*/ "This collection wasn't approved because its name violates {collections_rejected_policy_misleading}",
                [s._param("collections_rejected_policy_misleading", c(n, t))],
              ),
              second: s._(
                /*BTDS*/ "We reviewed this collection again and confirmed its name violates {collections_rejected_policy_misleading}.",
                [s._param("collections_rejected_policy_misleading", c(n, t))],
              ),
            }
          );
        case "real_fake_currency":
          return (
            (n = s._(
              /*BTDS*/ "WhatsApp's Commerce Policy for Real, virtual, or fake currency",
            )),
            {
              first: s._(
                /*BTDS*/ "This collection wasn't approved because its name violates {collections_rejected_policy_real_fake_currency}",
                [
                  s._param(
                    "collections_rejected_policy_real_fake_currency",
                    c(n, t),
                  ),
                ],
              ),
              second: s._(
                /*BTDS*/ "We reviewed this collection again and confirmed its name violates {collections_rejected_policy_real_fake_currency}.",
                [
                  s._param(
                    "collections_rejected_policy_real_fake_currency",
                    c(n, t),
                  ),
                ],
              ),
            }
          );
        case "digital_services_products":
          return (
            (n = s._(
              /*BTDS*/ "WhatsApp's Commerce Policy for Digital and subscription services",
            )),
            {
              first: s._(
                /*BTDS*/ "This collection wasn't approved because its name violates {collections_rejected_policy_digital_services_products}",
                [
                  s._param(
                    "collections_rejected_policy_digital_services_products",
                    c(n, t),
                  ),
                ],
              ),
              second: s._(
                /*BTDS*/ "We reviewed this collection again and confirmed its name violates {collections_rejected_policy_digital_services_products}.",
                [
                  s._param(
                    "collections_rejected_policy_digital_services_products",
                    c(n, t),
                  ),
                ],
              ),
            }
          );
        case "thrid_party_infringements":
          return (
            (n = s._(
              /*BTDS*/ "WhatsApp's Commerce Policy for Third-Party Infringement",
            )),
            {
              first: s._(
                /*BTDS*/ "This collection wasn't approved because its name violates {collections_rejected_policy_thrid_party_infringements}",
                [
                  s._param(
                    "collections_rejected_policy_thrid_party_infringements",
                    c(n, t),
                  ),
                ],
              ),
              second: s._(
                /*BTDS*/ "We reviewed this collection again and confirmed its name violates {collections_rejected_policy_thrid_party_infringements}.",
                [
                  s._param(
                    "collections_rejected_policy_thrid_party_infringements",
                    c(n, t),
                  ),
                ],
              ),
            }
          );
        case "unauthorized_media":
          return (
            (n = s._(
              /*BTDS*/ "WhatsApp's Commerce Policy for Products or items that facilitate or encourage unauthorized access to digital media",
            )),
            {
              first: s._(
                /*BTDS*/ "This collection wasn't approved because its name violates {collections_rejected_policy_unauthorized_media}",
                [
                  s._param(
                    "collections_rejected_policy_unauthorized_media",
                    c(n, t),
                  ),
                ],
              ),
              second: s._(
                /*BTDS*/ "We reviewed this collection again and confirmed its name violates {collections_rejected_policy_unauthorized_media}.",
                [
                  s._param(
                    "collections_rejected_policy_unauthorized_media",
                    c(n, t),
                  ),
                ],
              ),
            }
          );
        case "illegal_products":
          return (
            (n = s._(
              /*BTDS*/ "WhatsApp's Commerce Policy for Illegal products or services",
            )),
            {
              first: s._(
                /*BTDS*/ "This collection wasn't approved because its name violates {collections_rejected_policy_illegal_products}",
                [
                  s._param(
                    "collections_rejected_policy_illegal_products",
                    c(n, t),
                  ),
                ],
              ),
              second: s._(
                /*BTDS*/ "We reviewed this collection again and confirmed its name violates {collections_rejected_policy_illegal_products}.",
                [
                  s._param(
                    "collections_rejected_policy_illegal_products",
                    c(n, t),
                  ),
                ],
              ),
            }
          );
        case "hazardous_goods_and_materials":
          return (
            (n = s._(
              /*BTDS*/ "WhatsApp's Commerce Policy for Business models, goods, items, or services that may be or are fraudulent, misleading, offensive, or deceptive, or may be or are exploitative, inappropriate, or exert undue pressure on targeted groups",
            )),
            {
              first: s._(
                /*BTDS*/ "This collection wasn't approved because its name violates {collections_rejected_policy_hazardous_goods_and_materials}",
                [
                  s._param(
                    "collections_rejected_policy_hazardous_goods_and_materials",
                    c(n, t),
                  ),
                ],
              ),
              second: s._(
                /*BTDS*/ "We reviewed this collection again and confirmed its name violates {collections_rejected_policy_hazardous_goods_and_materials}.",
                [
                  s._param(
                    "collections_rejected_policy_hazardous_goods_and_materials",
                    c(n, t),
                  ),
                ],
              ),
            }
          );
        case "stolen_goods":
          return (
            (n = s._(/*BTDS*/ "WhatsApp's Commerce Policy")),
            {
              first: s._(
                /*BTDS*/ "This collection wasn't approved because its name violates {collections_rejected_policy_stolen_goods}",
                [s._param("collections_rejected_policy_stolen_goods", c(n, t))],
              ),
              second: s._(
                /*BTDS*/ "We reviewed this collection again and confirmed its name violates {collections_rejected_policy_stolen_goods}.",
                [s._param("collections_rejected_policy_stolen_goods", c(n, t))],
              ),
            }
          );
        case "human_exploitation_and_sexual_services":
          return (
            (n = s._(/*BTDS*/ "WhatsApp's Commerce Policy")),
            {
              first: s._(
                /*BTDS*/ "This collection wasn't approved because its name violates {collections_rejected_policy_human_exploitation_and_sexual_services}",
                [
                  s._param(
                    "collections_rejected_policy_human_exploitation_and_sexual_services",
                    c(n, t),
                  ),
                ],
              ),
              second: s._(
                /*BTDS*/ "We reviewed this collection again and confirmed its name violates {collections_rejected_policy_human_exploitation_and_sexual_services}.",
                [
                  s._param(
                    "collections_rejected_policy_human_exploitation_and_sexual_services",
                    c(n, t),
                  ),
                ],
              ),
            }
          );
        case "community_standards":
          return (
            (n = s._(/*BTDS*/ "WhatsApp's Business Terms")),
            {
              first: s._(
                /*BTDS*/ "This collection wasn't approved because its name violates {collections_rejected_policy_community_standards}",
                [
                  s._param(
                    "collections_rejected_policy_community_standards",
                    c(n, t),
                  ),
                ],
              ),
              second: s._(
                /*BTDS*/ "We reviewed this collection again and confirmed its name violates {collections_rejected_policy_community_standards}.",
                [
                  s._param(
                    "collections_rejected_policy_community_standards",
                    c(n, t),
                  ),
                ],
              ),
            }
          );
        case "discrimination":
          return (
            (n = s._(/*BTDS*/ "WhatsApp's Business Terms")),
            {
              first: s._(
                /*BTDS*/ "This collection wasn't approved because its name violates {collections_rejected_policy_discrimination}",
                [
                  s._param(
                    "collections_rejected_policy_discrimination",
                    c(n, t),
                  ),
                ],
              ),
              second: s._(
                /*BTDS*/ "We reviewed this collection again and confirmed its name violates {collections_rejected_policy_discrimination}.",
                [
                  s._param(
                    "collections_rejected_policy_discrimination",
                    c(n, t),
                  ),
                ],
              ),
            }
          );
        default:
          return (
            (n = s._(/*BTDS*/ "WhatsApp's Commerce Policy")),
            {
              first: s._(
                /*BTDS*/ "This collection wasn't approved because its name violates {collections_rejected_policy_other_violation}",
                [
                  s._param(
                    "collections_rejected_policy_other_violation",
                    c(n, t),
                  ),
                ],
              ),
              second: s._(
                /*BTDS*/ "We reviewed this collection again and confirmed its name violates {collections_rejected_policy_other_violation}.",
                [
                  s._param(
                    "collections_rejected_policy_other_violation",
                    c(n, t),
                  ),
                ],
              ),
            }
          );
      }
    }
    l.getRejectedCollectionCopy = d;
  },
  226,
);
