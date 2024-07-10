/// ALKU ///
// Alt+P tulostaa pikakuitin (tämän päivän lainat) lainaussivulla
$(document).ready(function () {
    if (window.location.pathname == '/cgi-bin/koha/circ/circulation.pl') {
        window.addEventListener("keydown", function (event) {
            if (event.altKey && event.key === "p") {
                window.open("/cgi-bin/koha/members/printslip.pl?borrowernumber=" + borrowernumber + "&amp;print=issueqslip", "printwindow");
            }
        });
    }
});
/// LOPPU ///