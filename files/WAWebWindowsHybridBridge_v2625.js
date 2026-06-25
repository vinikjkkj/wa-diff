__d(
  "WAWebWindowsHybridBridge.v2625",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2625",
    "WAWebWindowsHybridBridgeAbProps.v2625",
    "WAWebWindowsHybridBridgeAdv.v2625",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2625",
    "WAWebWindowsHybridBridgeConnection.v2625",
    "WAWebWindowsHybridBridgeContacts.v2625",
    "WAWebWindowsHybridBridgeDebugFeatures.v2625",
    "WAWebWindowsHybridBridgeLinksPreview.v2625",
    "WAWebWindowsHybridBridgeMediaFiles.v2625",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2625",
    "WAWebWindowsHybridBridgeNativeAppState.v2625",
    "WAWebWindowsHybridBridgePictures.v2625",
    "WAWebWindowsHybridBridgePreferences.v2625",
    "WAWebWindowsHybridBridgeRateTheApp.v2625",
    "WAWebWindowsHybridBridgeRingtone.v2625",
    "WAWebWindowsHybridBridgeScalingControl.v2625",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2625",
    "WAWebWindowsHybridBridgeSharesheet.v2625",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2625",
    "WAWebWindowsHybridBridgeTouchpadFix.v2625",
    "WAWebWindowsHybridBridgeVoip.v2625",
    "WAWebWindowsHybridBridgeWam.v2625",
    "cr:17220",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t;
        ((e.hostObjects.options.defaultSyncProxy = !0),
          (e.hostObjects.options.forceAsyncMethodMatches = [
            /Async$/,
            /AsyncWithSpeller$/,
          ]),
          (e.hostObjects.options.ignoreMemberNotFoundError = !0));
        var r = e.hostObjects.AbPropsBridge;
        r != null &&
          (this.abProps = new (o(
            "WAWebWindowsHybridBridgeAbProps.v2625",
          ).WindowsHybridBridgeAbProps_v2625)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2625",
          ).WindowsHybridBridgeWam_v2625)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2625",
          ).WindowsHybridBridgePreferences_v2625)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2625",
          ).WindowsHybridBridgeScalingControl_v2625)(l));
        var s = e.hostObjects.PicturesBridge;
        s &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2625",
          ).WindowsHybridBridgePictures_v2625)(s));
        var u = e.hostObjects.DebugFeaturesBridge,
          c = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        u != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2625",
            ).WindowsHybridBridgeDebugFeatures_v2625)(u))
          : c != null;
        var d = e.hostObjects.VoipBridge,
          m = e.hostObjects.VoipSignalingBridge;
        (d &&
          m &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2625",
          ).VoipWinRTBridge_v2625)(d, m)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2625",
          ).WAWebWindowsHybridBridgeRateTheApp_v2625)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2625",
          ).WindowsHybridBridgeConnection_v2625)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2625",
          ).WindowsHybridBridgeTouchpadFix_v2625)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2625",
          ).WindowsHybridBridgeLinksPreview_v2625)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var p = e.hostObjects.sync.PopulatedContactsBridge,
            _ = e.hostObjects.PopulatedContactsBridge;
          _ != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2625",
            ).WindowsHybridBridgeContacts_v2625)(_, p, !0));
        } catch (t) {
          var f = e.hostObjects.ContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2625",
            ).WindowsHybridBridgeContacts_v2625)(
              f,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var g = e.hostObjects.MediaFilesBridge;
        g != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2625",
          ).WAWebWindowsHybridBridgeMediaFiles_v2625)(g));
        var h = e.hostObjects.SharesheetBridge;
        h != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2625",
          ).WAWebWindowsHybridBridgeSharesheet_v2625)(h));
        var y = e.hostObjects.AppActivationBridge;
        y != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2625",
          ).WindowsHybridAppActivationBridge_v2625)(y));
        var C = e.hostObjects.NativeAppStateBridge,
          b = e.hostObjects.sync.NativeAppStateBridge;
        C != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2625",
          ).WindowsHybridBridgeNativeAppState_v2625)(C, b));
        var v = e.hostObjects.SystemIntegrationsBridge;
        v &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2625",
          ).WindowsHybridBridgeSystemIntegrations_v2625)(v));
        var S = e.hostObjects.BrowserExtensionsBridge;
        S &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2625",
          ).WindowsHybridBridgeBrowserExtensions_v2625)(S));
        var R = e.hostObjects.SeamlessMigrationBridge;
        R &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2625",
          ).WindowsHybridBridgeSeamlessMigration_v2625)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        (L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2625",
          ).WindowsHybridBridgeMediaTranscoder_v2625)(e, L)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2625",
          ).WindowsHybridBridgeAdv_v2625)(e.hostObjects.AdvBridge)));
        var E = e.hostObjects.RingtoneBridge;
        (E != null &&
          (this.ringtoneBridge = new (o(
            "WAWebWindowsHybridBridgeRingtone.v2625",
          ).WindowsHybridBridgeRingtone_v2625)(E)),
          (t = e.hostObjects.WebUpdateBridge) == null ||
            t.updateWebRevision(o("WAWebBuildConstants").VERSION_TERTIARY));
      }
      var t = e.prototype;
      return (
        (t.getPreferences = function () {
          var e;
          return ((e = this.$1) == null || e.initialize(), this.$1);
        }),
        (t.getScalingControl = function () {
          var e;
          return (
            (e = this.scalingControl) == null || e.initialize(),
            this.scalingControl
          );
        }),
        (t.getRateTheApp = function () {
          return this.$5;
        }),
        (t.getClientKeyBridge = function () {
          return this.$2;
        }),
        (t.getDebugFeatures = function () {
          return this.$4;
        }),
        e
      );
    })();
    l.WindowsHybridBridge_v2625 = e;
  },
  98,
);
