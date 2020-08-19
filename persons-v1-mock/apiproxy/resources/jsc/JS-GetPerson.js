var id = context.getVariable( "personId");
var persons = JSON.parse( context.getVariable( "persons") );

var arr = persons.persons;
for ( i=0; i<arr.length; i++ ) {
	 if( arr[i].id == id ) {
		 context.setVariable( "person", JSON.stringify(arr[i]));
	 }
}