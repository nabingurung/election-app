using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ElectionService.Migrations
{
    /// <inheritdoc />
    public partial class transactionuserid : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "TransactionUserId",
                table: "Voters",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TransactionUserId",
                table: "Voters");
        }
    }
}
