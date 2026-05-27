__d(
  "WAWebBizAiKnowledgeUtils",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      return e === "address"
        ? { address: t }
        : e === "business_hours"
          ? { business_hours: t }
          : e === "description"
            ? { description: t }
            : e === "discount_policy"
              ? { discount_policy: t }
              : e === "email"
                ? { email: t }
                : e === "payment_methods"
                  ? { payment_methods: t }
                  : e === "purchase_info"
                    ? { purchase_info: t }
                    : e === "return_policy"
                      ? { return_policy: t }
                      : e === "shipping_policy"
                        ? { shipping_policy: t }
                        : e === "website"
                          ? { websites: t === "" ? [] : [{ website_url: t }] }
                          : { description: t };
    }
    i.buildKnowledgeInput = e;
  },
  66,
);
