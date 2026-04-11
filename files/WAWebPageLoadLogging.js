__d(
  "WAWebPageLoadLogging",
  [],
  function (t, n, r, o, a, i) {
    var e = {
      PAGE_LOAD_ID: "0",
      endPageLoadQpl: function () {},
      endPageLoadQplMeasure: function () {},
      startPageLoadQplMeasure: function () {},
      addPageLoadQplPoint: function () {},
      addPageLoadQplAnnotation: function () {},
      incrementPageLoadQplSocketError: function () {},
      addPageLoadValidationData: function () {},
      setWamCompleteForValidation: function () {},
    };
    function l(t) {
      e = t;
    }
    var s = !1;
    function u(t, n, r) {
      return ((s = !0), e.endPageLoadQpl(t, n, r));
    }
    function c(t) {
      return e.startPageLoadQplMeasure(t);
    }
    function d(t) {
      return e.endPageLoadQplMeasure(t);
    }
    function m(t) {
      return e.addPageLoadQplPoint(t);
    }
    function p(t) {
      return e.addPageLoadQplAnnotation(t);
    }
    function _(t, n) {
      return e.addPageLoadValidationData(t, n);
    }
    function f() {
      return e.incrementPageLoadQplSocketError();
    }
    function g() {
      return e.setWamCompleteForValidation();
    }
    function h() {
      return e.PAGE_LOAD_ID;
    }
    function y() {
      return s;
    }
    ((i.setImpl = l),
      (i.endPageLoadQpl = u),
      (i.startPageLoadQplMeasure = c),
      (i.endPageLoadQplMeasure = d),
      (i.addPageLoadQplPoint = m),
      (i.addPageLoadQplAnnotation = p),
      (i.addPageLoadValidationData = _),
      (i.incrementPageLoadQplSocketError = f),
      (i.setWamCompleteForValidation = g),
      (i.getPageLoadId = h),
      (i.wasPageLoadQplLogged = y));
  },
  66,
);
