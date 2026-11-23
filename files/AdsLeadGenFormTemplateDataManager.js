__d(
  "AdsLeadGenFormTemplateDataManager",
  [
    "AdsGraphAPI",
    "AdsLeadGenFormTemplate",
    "AdsLeadGenFormTemplateFields",
    "AdsLeadGenFormTemplateLoadedAction",
    "AdsLeadGenFormTemplateTranslatedContentAPITransformer",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {
          var e = this;
          this.load = function (t) {
            r("promiseDone")(
              o("AdsGraphAPI")
                .get(i.id)
                .object("template_form", t)
                .get({ fields: r("AdsLeadGenFormTemplateFields") }),
              function (n) {
                e.$1(n, t);
              },
            );
          };
        }
        var t = e.prototype;
        return (
          (t.loadAll = function (t) {
            (t === void 0 && (t = []), t.forEach(this.load, this));
          }),
          (t.$1 = function (t, n) {
            var e = o(
              "AdsLeadGenFormTemplateTranslatedContentAPITransformer",
            ).fromAPI(
              t.template_form,
              t.translated_template_content,
              t.translated_template_name,
            );
            ((e = e.set("flexible_form_delivery_options", 15)),
              r("AdsLeadGenFormTemplateLoadedAction").dispatch(
                {
                  templateID: n,
                  template: o(
                    "AdsLeadGenFormTemplate",
                  ).makeAdsLeadGenFormTemplate({
                    id: n,
                    name: t.translated_template_name,
                    description: t.translated_template_description,
                    template_form: e,
                    type: t.form_template_type,
                  }),
                },
                {
                  line: "61",
                  module: "AdsLeadGenFormTemplateDataManager.js",
                  moduleID: i.id,
                },
              ));
          }),
          e
        );
      })(),
      s = new e();
    l.default = s;
  },
  98,
);
