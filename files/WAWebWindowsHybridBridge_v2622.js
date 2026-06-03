__d(
  "WAWebWindowsHybridBridge.v2622",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2622",
    "WAWebWindowsHybridBridgeAbProps.v2622",
    "WAWebWindowsHybridBridgeAdv.v2622",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2622",
    "WAWebWindowsHybridBridgeConnection.v2622",
    "WAWebWindowsHybridBridgeContacts.v2622",
    "WAWebWindowsHybridBridgeDebugFeatures.v2622",
    "WAWebWindowsHybridBridgeLinksPreview.v2622",
    "WAWebWindowsHybridBridgeMediaFiles.v2622",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2622",
    "WAWebWindowsHybridBridgeNativeAppState.v2622",
    "WAWebWindowsHybridBridgePictures.v2622",
    "WAWebWindowsHybridBridgePreferences.v2622",
    "WAWebWindowsHybridBridgeRateTheApp.v2622",
    "WAWebWindowsHybridBridgeRingtone.v2622",
    "WAWebWindowsHybridBridgeScalingControl.v2622",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2622",
    "WAWebWindowsHybridBridgeSharesheet.v2622",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2622",
    "WAWebWindowsHybridBridgeTouchpadFix.v2622",
    "WAWebWindowsHybridBridgeVoip.v2622",
    "WAWebWindowsHybridBridgeWam.v2622",
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
            "WAWebWindowsHybridBridgeAbProps.v2622",
          ).WindowsHybridBridgeAbProps_v2622)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2622",
          ).WindowsHybridBridgeWam_v2622)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2622",
          ).WindowsHybridBridgePreferences_v2622)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2622",
          ).WindowsHybridBridgeScalingControl_v2622)(l));
        var s = e.hostObjects.PicturesBridge;
        s &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2622",
          ).WindowsHybridBridgePictures_v2622)(s));
        var u = e.hostObjects.DebugFeaturesBridge,
          c = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        u != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2622",
            ).WindowsHybridBridgeDebugFeatures_v2622)(u))
          : c != null;
        var d = e.hostObjects.VoipBridge,
          m = e.hostObjects.VoipSignalingBridge;
        (d &&
          m &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2622",
          ).VoipWinRTBridge_v2622)(d, m)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2622",
          ).WAWebWindowsHybridBridgeRateTheApp_v2622)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2622",
          ).WindowsHybridBridgeConnection_v2622)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2622",
          ).WindowsHybridBridgeTouchpadFix_v2622)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2622",
          ).WindowsHybridBridgeLinksPreview_v2622)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var p = e.hostObjects.sync.PopulatedContactsBridge,
            _ = e.hostObjects.PopulatedContactsBridge;
          _ != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2622",
            ).WindowsHybridBridgeContacts_v2622)(_, p, !0));
        } catch (t) {
          var f = e.hostObjects.ContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2622",
            ).WindowsHybridBridgeContacts_v2622)(
              f,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var g = e.hostObjects.MediaFilesBridge;
        g != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2622",
          ).WAWebWindowsHybridBridgeMediaFiles_v2622)(g));
        var h = e.hostObjects.SharesheetBridge;
        h != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2622",
          ).WAWebWindowsHybridBridgeSharesheet_v2622)(h));
        var y = e.hostObjects.AppActivationBridge;
        y != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2622",
          ).WindowsHybridAppActivationBridge_v2622)(y));
        var C = e.hostObjects.NativeAppStateBridge,
          b = e.hostObjects.sync.NativeAppStateBridge;
        C != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2622",
          ).WindowsHybridBridgeNativeAppState_v2622)(C, b));
        var v = e.hostObjects.SystemIntegrationsBridge;
        v &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2622",
          ).WindowsHybridBridgeSystemIntegrations_v2622)(v));
        var S = e.hostObjects.BrowserExtensionsBridge;
        S &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2622",
          ).WindowsHybridBridgeBrowserExtensions_v2622)(S));
        var R = e.hostObjects.SeamlessMigrationBridge;
        R &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2622",
          ).WindowsHybridBridgeSeamlessMigration_v2622)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        (L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2622",
          ).WindowsHybridBridgeMediaTranscoder_v2622)(e, L)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2622",
          ).WindowsHybridBridgeAdv_v2622)(e.hostObjects.AdvBridge)));
        var E = e.hostObjects.RingtoneBridge;
        (E != null &&
          (this.ringtoneBridge = new (o(
            "WAWebWindowsHybridBridgeRingtone.v2622",
          ).WindowsHybridBridgeRingtone_v2622)(E)),
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
    l.WindowsHybridBridge_v2622 = e;
  },
  98,
);
