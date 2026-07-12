# Assetflow-odoo-hackathon2026
Enterprise Asset &amp; Resource Management System with asset tracking, resource booking, maintenance workflows, audits, role-based access, and analytics. Built for the Odoo Hackathon.
# Database Design (ER Diagram)

## Overview

The AssetFlow database is designed using a relational database model in PostgreSQL. It efficiently manages information related to employees, departments, assets, resource bookings, maintenance requests, audits, and notifications. The database is normalized and uses primary keys (PK) and foreign keys (FK) to maintain data integrity and establish relationships between tables.

The Entity Relationship (ER) Diagram below represents the overall database structure and illustrates how different entities in the system are connected.

## Entity Relationships

- One **Department** can have many **Users**.
- One **Department** can have many **Assets**.
- One **Category** can contain many **Assets**.
- One **User** can have multiple **Asset Allocations**.
- One **Asset** can have multiple **Asset Allocations**.
- One **Asset** can have multiple **Transfer Requests**.
- One **Resource** can have multiple **Resource Bookings**.
- One **User** can create multiple **Resource Bookings**.
- One **Asset** can have multiple **Maintenance Requests**.
- One **Department** can have multiple **Audits**.
- One **Audit** can contain multiple **Audit Details**.
- One **User** can receive multiple **Notifications**.

---

## Database Tables

| Table Name | Description |
|------------|-------------|
| Users | Stores employee and administrator information |
| Departments | Stores department details |
| Categories | Stores asset categories |
| Assets | Stores all company assets |
| Asset_Allocations | Tracks asset assignments to users |
| Transfer_Requests | Stores asset transfer requests |
| Resources | Stores bookable resources such as meeting rooms |
| Resource_Bookings | Stores booking information for resources |
| Maintenance_Requests | Stores maintenance requests for assets |
| Audits | Stores audit session information |
| Audit_Details | Stores asset verification details for each audit |
| Notifications | Stores system notifications sent to users |

---

## Database Schema Overview

```
Departments
   │
   ├───────────────< Users
   │                     │
   │                     ├──────────< Notifications
   │                     ├──────────< Resource_Bookings
   │                     └──────────< Asset_Allocations
   │
   ├───────────────< Assets >──────────── Categories
   │                     │
   │                     ├──────────< Maintenance_Requests
   │                     ├──────────< Transfer_Requests
   │                     └──────────< Audit_Details
   │
   └───────────────< Audits
                          │
                          └──────────< Audit_Details

Resources
    │
    └──────────────< Resource_Bookings
```

---

## Conclusion

The database schema is designed to be scalable, maintainable, and efficient for managing organizational assets and resources. By organizing data into well-structured tables and connecting them through primary and foreign keys, the system ensures data consistency while supporting asset allocation, resource booking, maintenance tracking, audits, and notifications. This design provides a strong foundation for the backend development of the AssetFlow application.