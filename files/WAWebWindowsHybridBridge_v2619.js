__d(
  "WAWebWindowsHybridBridge.v2619",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2619",
    "WAWebWindowsHybridBridgeAbProps.v2619",
    "WAWebWindowsHybridBridgeAdv.v2619",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2619",
    "WAWebWindowsHybridBridgeConnection.v2619",
    "WAWebWindowsHybridBridgeContacts.v2619",
    "WAWebWindowsHybridBridgeDebugFeatures.v2619",
    "WAWebWindowsHybridBridgeLinksPreview.v2619",
    "WAWebWindowsHybridBridgeMediaFiles.v2619",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2619",
    "WAWebWindowsHybridBridgeNativeAppState.v2619",
    "WAWebWindowsHybridBridgePictures.v2619",
    "WAWebWindowsHybridBridgePreferences.v2619",
    "WAWebWindowsHybridBridgeRateTheApp.v2619",
    "WAWebWindowsHybridBridgeRingtone.v2619",
    "WAWebWindowsHybridBridgeScalingControl.v2619",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2619",
    "WAWebWindowsHybridBridgeSharesheet.v2619",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2619",
    "WAWebWindowsHybridBridgeTouchpadFix.v2619",
    "WAWebWindowsHybridBridgeVoip.v2619",
    "WAWebWindowsHybridBridgeWam.v2619",
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
            "WAWebWindowsHybridBridgeAbProps.v2619",
          ).WindowsHybridBridgeAbProps_v2619)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2619",
          ).WindowsHybridBridgeWam_v2619)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2619",
          ).WindowsHybridBridgePreferences_v2619)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2619",
          ).WindowsHybridBridgeScalingControl_v2619)(l));
        var s = e.hostObjects.PicturesBridge;
        s &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2619",
          ).WindowsHybridBridgePictures_v2619)(s));
        var u = e.hostObjects.DebugFeaturesBridge,
          c = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        u != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2619",
            ).WindowsHybridBridgeDebugFeatures_v2619)(u))
          : c != null;
        var d = e.hostObjects.VoipBridge,
          m = e.hostObjects.VoipSignalingBridge;
        (d &&
          m &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2619",
          ).VoipWinRTBridge_v2619)(d, m)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2619",
          ).WAWebWindowsHybridBridgeRateTheApp_v2619)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2619",
          ).WindowsHybridBridgeConnection_v2619)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2619",
          ).WindowsHybridBridgeTouchpadFix_v2619)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2619",
          ).WindowsHybridBridgeLinksPreview_v2619)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var p = e.hostObjects.sync.PopulatedContactsBridge,
            _ = e.hostObjects.PopulatedContactsBridge;
          _ != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2619",
            ).WindowsHybridBridgeContacts_v2619)(_, p, !0));
        } catch (t) {
          var f = e.hostObjects.ContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2619",
            ).WindowsHybridBridgeContacts_v2619)(
              f,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var g = e.hostObjects.MediaFilesBridge;
        g != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2619",
          ).WAWebWindowsHybridBridgeMediaFiles_v2619)(g));
        var h = e.hostObjects.SharesheetBridge;
        h != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2619",
          ).WAWebWindowsHybridBridgeSharesheet_v2619)(h));
        var y = e.hostObjects.AppActivationBridge;
        y != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2619",
          ).WindowsHybridAppActivationBridge_v2619)(y));
        var C = e.hostObjects.NativeAppStateBridge,
          b = e.hostObjects.sync.NativeAppStateBridge;
        C != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2619",
          ).WindowsHybridBridgeNativeAppState_v2619)(C, b));
        var v = e.hostObjects.SystemIntegrationsBridge;
        v &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2619",
          ).WindowsHybridBridgeSystemIntegrations_v2619)(v));
        var S = e.hostObjects.BrowserExtensionsBridge;
        S &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2619",
          ).WindowsHybridBridgeBrowserExtensions_v2619)(S));
        var R = e.hostObjects.SeamlessMigrationBridge;
        R &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2619",
          ).WindowsHybridBridgeSeamlessMigration_v2619)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        (L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2619",
          ).WindowsHybridBridgeMediaTranscoder_v2619)(e, L)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2619",
          ).WindowsHybridBridgeAdv_v2619)(e.hostObjects.AdvBridge)));
        var E = e.hostObjects.RingtoneBridge;
        (E != null &&
          (this.ringtoneBridge = new (o(
            "WAWebWindowsHybridBridgeRingtone.v2619",
          ).WindowsHybridBridgeRingtone_v2619)(E)),
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
    l.WindowsHybridBridge_v2619 = e;
  },
  98,
);
