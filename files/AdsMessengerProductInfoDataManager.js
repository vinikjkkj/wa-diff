__d(
  "AdsMessengerProductInfoDataManager",
  [
    "AdsInterfacesLogger",
    "AdsMessengerOrdersSwitchToggleAction",
    "adsMessengerDataModelGetProductInfo",
    "adsMessengerDataModelSetProductInfo",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.toggleProductInfoSection = function (t) {
            r("AdsMessengerOrdersSwitchToggleAction").dispatch(
              { isOrdersEnabled: t },
              {
                line: "31",
                module: "AdsMessengerProductInfoDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (t.validateNameHasError = function (t) {
            return t == null || t.length === 0;
          }),
          (t.validateImageHasError = function (t) {
            return t == null;
          }),
          (t.validatePriceHasError = function (t) {
            return t === 0;
          }),
          (t.validateProductInfoHasError = function (t) {
            var e,
              n = o(
                "adsMessengerDataModelGetProductInfo",
              ).adsMessengerDataModelGetProductInfoField(
                t,
                o("adsMessengerDataModelSetProductInfo").ProductInfoField.Name,
              ),
              r = this.validateNameHasError(n),
              a = parseFloat(
                (e = o(
                  "adsMessengerDataModelGetProductInfo",
                ).adsMessengerDataModelGetProductInfoField(
                  t,
                  o("adsMessengerDataModelSetProductInfo").ProductInfoField
                    .Price,
                )) != null
                  ? e
                  : "0",
              ),
              i = this.validatePriceHasError(a),
              l = o(
                "adsMessengerDataModelGetProductInfo",
              ).convertImageHashToImageId(
                o(
                  "adsMessengerDataModelGetProductInfo",
                ).adsMessengerDataModelGetProductInfoField(
                  t,
                  o("adsMessengerDataModelSetProductInfo").ProductInfoField
                    .Image,
                ),
              ),
              s = this.validateImageHasError(l);
            return r || i || s;
          }),
          (t.getProductInfoString = function (t) {
            return JSON.stringify(
              o(
                "adsMessengerDataModelGetProductInfo",
              ).adsMessengerDataModelGetProductInfo(t),
            );
          }),
          (t.logProductInfoEvents = function (t, n, o, a, i, l) {
            var e;
            r("AdsInterfacesLogger").log({
              eventName: t,
              eventCategory: "user_action",
              data:
                ((e = {}),
                (e.sub_event = n),
                (e.objective = o),
                (e.adgroup_id = a),
                (e.page_id = i == null ? void 0 : i.id),
                (e.message = this.getProductInfoString(l)),
                e),
            });
          }),
          e
        );
      })(),
      s = new e();
    l.default = s;
  },
  98,
);
