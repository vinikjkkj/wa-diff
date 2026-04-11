__d(
  "WAWebModalManager",
  ["Promise", "WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function r() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(r, t);
        var o = r.prototype;
        return (
          (o.open = function (t, n) {
            this.trigger("open_modal", t, n);
          }),
          (o.exists = function (t) {
            this.trigger("exists_modal", t);
          }),
          (o.existsAsync = function () {
            var t = this;
            return new (e || (e = n("Promise")))(function (e) {
              t.exists(e);
            });
          }),
          (o.close = function (t) {
            this.trigger("close_modal", t);
          }),
          (o.openMedia = function (t, n) {
            this.trigger("open_media", t, n);
          }),
          (o.existsMedia = function (t) {
            this.trigger("exists_media", t);
          }),
          (o.closeMedia = function () {
            this.trigger("close_media");
          }),
          (o.openAlert = function (t, n) {
            this.trigger("open_alert", t, n);
          }),
          (o.existsAlert = function (t) {
            this.trigger("exists_alert", t);
          }),
          (o.closeAlert = function (t) {
            this.trigger("close_alert", t);
          }),
          (o.getRef = function (t) {
            this.trigger("get_ref", t);
          }),
          (o.openSupportModal = function (t, n) {
            var e = this;
            this.trigger("exists_modal", function (r) {
              r ? e.trigger("open_support", t, n) : e.open(t, n);
            });
          }),
          (o.existsSupportModal = function (t) {
            this.trigger("exists_support", t);
          }),
          (o.closeSupportOrModal = function (t) {
            var e = this;
            this.trigger("exists_support", function (n) {
              n ? e.trigger("close_support", t) : e.close(t);
            });
          }),
          (o.closeSupportModal = function (t) {
            var e = this;
            this.trigger("exists_modal", function (n) {
              n ? e.trigger("close_support", t) : e.close(t);
            });
          }),
          (o.setForceRequestFocusMedia = function (t, n) {
            this.trigger("set_force_should_request_focus_" + n, t);
          }),
          r
        );
      })(r("WAWebEventEmitter")),
      u = new s();
    function c() {
      u.close();
    }
    function d() {
      u.closeSupportOrModal();
    }
    ((l.ModalManagerImpl = s),
      (l.ModalManager = u),
      (l.closeModalManager = c),
      (l.closeSupportOrModal = d));
  },
  98,
);
