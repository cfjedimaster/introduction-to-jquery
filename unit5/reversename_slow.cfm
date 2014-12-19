<cfparam name="url.name" default="">
<!--- form scope overrules url scope --->
<cfif structKeyExists(form, "name")>
	<cfset url.name = form.name>
</cfif>
<cfset sleep(5000)>
<cfoutput>#reverse(url.name)#</cfoutput>